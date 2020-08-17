import { useRouter } from "next/router";
import Head from "@/components/head";
import Nav from "@/components/nav";

const Post = ({ post }: { post: string }) => {
    const router = useRouter();
    const { type, articleid } = router.query;
    console.log(type, articleid, router);
    return (
        <div className="article-page">
            <Head title="如何控制多个 toast 提示的展示" />
            <Nav />
            <h1 className="title">如何控制多个 toast 提示的展示</h1>
            <div className="container">
                <article className="main" dangerouslySetInnerHTML={{ __html: post }}></article>
            </div>
            <style jsx>{`
                .title, .container {
                    max-width: 1330px;
                    margin: 0 auto;
                }
                .title {
                    font-family: 'Songti SC','Noto Serif SC',STZhongsong,STKaiti,KaiTi,Roboto,serif;
                    font-size: 32px;
                    margin-bottom: 4px;
                    color: #3e3b3f;
                }
                .main {
                    font-size: 16px;
                }
            `}</style>
        </div>
    );
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            post: `
        <div class="lead">
            当需要同时展示多个toast提示，我们应该如何控制呢？        </div>
        <p>我们在平时会用弹窗或者 toast 对用户进行提示，而弹窗是属于强提示类型的（需要用户点击等交互后弹窗才消失），提供的信息量也大，而 toast 提示则属于弱提示类型（无论用户有没有看到，反正我提示了），仅进行小小的提醒。</p><p>弹窗类型的交互通常可以多个弹窗叠加，用户关闭一个后，再看下一个；而 toast 提示通常在同一时间只显示一个，那么如果同时多个 toast 需要提示时，怎么办？</p><ul><li><p>ant design 中的做法是同时将多个 toast 放到一个容器里（没有该容器则创建，有则直接使用），从上往下都展示出来【<a href="https://ant.design/components/message-cn" target="_blank">ant design message</a>】，</p></li><li><p>我们是为了跟新闻客户端 APP 的提示更加贴近，同一时间只弹一个，其他的先缓存起来。</p></li></ul><p>我们接下来把这两种方式都实现一下。</p><h3><a id="user-content-npm--nodejs-server-module" class="anchor" aria-hidden="true" href="#npm--nodejs-server-module"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>1. 先实现一个简单的 toast</h3><p>我们先来实现一个简单的 toast，然后再说如何控制多个 toast 的先后提示。</p><pre><code class="javascript hljs"><span class="hljs-comment">// 在浏览器上模拟toast提示</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> toast = (
    text: string | number,
    <span class="hljs-attr">duration</span>: number = <span class="hljs-number">1800</span>,
    <span class="hljs-attr">container</span>: HTMLElement = <span class="hljs-built_in">document</span>.body
): <span class="hljs-built_in">Promise</span>&lt;any&gt; =&gt; {
    toastInstance = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">let</span> div: HTMLElement = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'div'</span>);
    div.className = <span class="hljs-string">'toast'</span>;
    div.style.cssText = <span class="hljs-string">\`position: relative;
                        margin-top: 20px;
                        padding: 12px 20px;
                        border-radius: 5px;
                        background-color: rgba(255, 255, 255, 0.96);
                        color: #111111;
                        font-size: 16px;
                        line-height: 1.5;
                        white-space: nowrap;
                        text-align: center;\`</span>;
    div &amp;&amp; (div.innerHTML = text.toString());
    container.appendChild(div);

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            div &amp;&amp; div.parentNode &amp;&amp; div.parentNode.removeChild(div); <span class="hljs-comment">// 固定时间后消失</span>
            toastInstance = <span class="hljs-literal">false</span>;
            resolve();
        }, duration);
    });
};</code></pre><p>用 div 模拟一个 toast。</p><h3>2. 展示多个 toast 的方式</h3><h4>2.1 将多个 toast 都展示出来</h4><p>这里我们的重点是要创建一个 toast 所在的唯一的容器，然后给容器一个定位：</p><pre><code class="javascript hljs"><span class="hljs-keyword">let</span> toastContainer: any = <span class="hljs-literal">null</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> getToastContainer = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">if</span> (toastContainer) {
        <span class="hljs-keyword">return</span> toastContainer;
    }
    toastContainer = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'div'</span>);
    toastContainer.style.cssText = <span class="hljs-string">\`position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translate3d(-50%, 0, 0);
                        z-index: 9999;\`</span>;

    <span class="hljs-built_in">document</span>.body.appendChild(toastContainer);
    <span class="hljs-keyword">return</span> toastContainer;
};</code></pre><p>最后给一个总入口，把单个 toast 放在容器里：</p><pre><code class="javascript hljs"><span class="hljs-keyword">const</span> message = <span class="hljs-function">(<span class="hljs-params">text</span>) =&gt;</span> {
    getToastContainer();
    toast(text, <span class="hljs-number">1800</span>, toastContainer);
};</code></pre><p>可以查看 demo 效果：<a href="https://www.xiabingbao.com/demos/20200720/ant-design-toast.html" target="_blank">类 ant design 的 toast 提示</a>。</p><h4>2.2 同时只显示一个 toast 提示</h4><p>上面的提示方式在 PC 端还可以，但是在移动端的小屏幕上，同时显示多个会显得比较拥挤，因此我们这里同时最多只显示一个 toast 提示，上一个消失之后，再展示下一个 toast 提示。</p><p>这里我们要对<code>toast</code>稍微改造下：</p><ol><li><p>同一时间只能创建一个 toast，因此添加一个 toastInstance 变量进行控制；</p></li><li><p>修改 toast 的样式；</p></li></ol><pre><code class="javascript hljs">+ <span class="hljs-keyword">let</span> toastInstance = <span class="hljs-literal">false</span>;
<span class="hljs-keyword">const</span> toast = <span class="hljs-function">(<span class="hljs-params">text, duration = <span class="hljs-number">1800</span>, container = <span class="hljs-built_in">document</span>.body</span>) =&gt;</span> {
+    <span class="hljs-keyword">if</span> (toastInstance) {
+        <span class="hljs-keyword">return</span>;
+    }
+    toastInstance = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">let</span> div = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'div'</span>);
    div.className = <span class="hljs-string">'toast'</span>;
    div.style.cssText = <span class="hljs-string">\`position: fixed;
                                padding: 12px 20px;
                                border-radius: 5px;
+                               top: 20px;
+                               left: 50%;
+                               transform: translate3d(-50%, 0, 0);
                                background-color: rgba(255, 255, 255, 0.96);
                                box-shadow: 0 0 2px #666666;
                                color: #111111;
                                font-size: 16px;
                                line-height: 1.5;
                                white-space: nowrap;
                                text-align: center;\`</span>;
    div &amp;&amp; (div.innerHTML = text.toString());
    container.appendChild(div);

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            div &amp;&amp; div.parentNode &amp;&amp; div.parentNode.removeChild(div); <span class="hljs-comment">// 固定时间后消失</span>
+            toastInstance = <span class="hljs-literal">false</span>;
            resolve();
        }, duration);
    });
};</code></pre><p>然后通过一个方法和缓存来控制 toast 的显示：</p><pre><code class="javascript hljs"><span class="hljs-keyword">let</span> toastList = []; <span class="hljs-comment">// 后面的提示先缓存起来</span>
<span class="hljs-keyword">const</span> toastWaterFall = <span class="hljs-keyword">async</span> (text) =&gt; {
    <span class="hljs-keyword">if</span> (toastInstance) {
        toastList.push(text); <span class="hljs-comment">// 若当前toast正在进行，则缓存</span>
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">await</span> toast(text); <span class="hljs-comment">// 否则展示toast提示</span>

        <span class="hljs-keyword">if</span> (toastList.length) {
            <span class="hljs-keyword">while</span> (toastList.length) {
                <span class="hljs-keyword">await</span> sleep(<span class="hljs-number">300</span>); <span class="hljs-comment">// 延迟一段时间</span>
                <span class="hljs-keyword">await</span> toast(toastList.shift() + <span class="hljs-string">''</span>);
            }
        }
    }
};</code></pre><p>可以点击链接查看 demo：<a href="https://www.xiabingbao.com/demos/20200720/only-one-toast.html" target="_blank">同时最多只展示一个 toast 提示</a>。</p><h3>3. 总结</h3><p>关于 toast 的设计还有很多要考虑的问题，这里我们也是探讨了如何控制多个 toast 的展示问题。</p>`,
        },
    };
}

export default Post;
