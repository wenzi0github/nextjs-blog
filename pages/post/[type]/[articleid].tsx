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
            <div className="container">
                <h1 className="title">如何控制多个 toast 提示的展示</h1>
                <article className="content" dangerouslySetInnerHTML={{ __html: post }}></article>
            </div>
            <style jsx>{`
                .hljs-emphasis,
                .article-page article .lead {
                    font-style: italic;
                }
                .hljs {
                    display: block;
                    overflow-x: auto;
                    padding: 24px 0.5em 0.5em;
                    color: #333;
                    background: #f8f8f8;
                    border-radius: 3px;
                    font-size: 14px;
                    line-height: 1.6;
                }
                .hljs-comment,
                .hljs-quote {
                    color: #998;
                    font-style: italic;
                }
                .hljs-keyword,
                .hljs-selector-tag,
                .hljs-subst {
                    color: #333;
                    font-weight: 700;
                }
                .hljs-literal,
                .hljs-number,
                .hljs-tag .hljs-attr,
                .hljs-template-variable,
                .hljs-variable {
                    color: teal;
                }
                .hljs-doctag,
                .hljs-string {
                    color: #d14;
                }
                .hljs-section,
                .hljs-selector-id,
                .hljs-title {
                    color: #900;
                    font-weight: 700;
                }
                .hljs-subst {
                    font-weight: 400;
                }
                .hljs-class .hljs-title,
                .hljs-type {
                    color: #458;
                    font-weight: 700;
                }
                .hljs-attribute,
                .hljs-name,
                .hljs-tag {
                    color: navy;
                    font-weight: 400;
                }
                .hljs-meta,
                .hljs-strong {
                    font-weight: 700;
                }
                .hljs-link,
                .hljs-regexp {
                    color: #009926;
                }
                .hljs-bullet,
                .hljs-symbol {
                    color: #990073;
                }
                .hljs-built_in,
                .hljs-builtin-name {
                    color: #0086b3;
                }
                .hljs-meta {
                    color: #999;
                }
                .hljs-deletion {
                    background: #fdd;
                }
                .hljs-addition {
                    background: #dfd;
                }
                .container .content {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }
                .main {
                    font-size: 15px;
                    color: #4d494e;
                    width: 72%;
                }
                .aside {
                    width: 26%;
                    padding-top: 60px;
                }
                .aside h3 {
                    margin-top: 14px;
                }
                .aside .tags a {
                    padding: 2px 6px;
                    margin-right: 6px;
                    margin-bottom: 6px;
                    background-color: #efefef;
                    border-radius: 2px;
                    font-size: 17px;
                }
                .aside .newsest li {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 3px;
                }
                .title {
                    padding: 10px 0;
                    font-size: 30px;
                    word-break: break-all;
                    border-bottom: 1px solid #ccc;
                }
                .article-page h1 a {
                    margin-bottom: 4px;
                    font-weight: 500;
                    color: #3e3b3f;
                }
                .info {
                    border-top: 1px solid #ccc;
                    padding-top: 10px;
                    text-align: right;
                }
                .info .pubtime {
                    margin-left: 10px;
                }
                .article-page article {
                    padding-top: 20px;
                }
                .article-page article img {
                    max-height: 280px;
                    max-width: 100%;
                    display: block;
                    margin: 0 auto;
                    cursor: -webkit-zoom-in;
                    cursor: zoom-in;
                }
                .article-page article .lead {
                    background: #f1eeea;
                    padding: 10px 8px;
                    margin-bottom: 10px;
                }
                .article-page article a {
                    padding: 2px 0;
                    position: relative;
                    -webkit-transition: 0.2s all linear;
                    transition: 0.2s all linear;
                }
                .article-page article a:before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    bottom: -1px;
                    width: 0;
                    height: 1px;
                    background: #f30;
                    -webkit-transition: all 0.3s;
                    transition: all 0.3s;
                }
                .article-page article a:hover {
                    color: #f30;
                }
                .article-page article a:hover:before {
                    width: 100%;
                    left: 0;
                    right: 0;
                }
                .article-page article h3 {
                    font-size: 20px;
                    font-weight: 700;
                    margin-top: 15px;
                }
                .article-page article h4 {
                    margin-top: 10px;
                    font-size: 17px;
                }
                .article-page article p {
                    padding: 8px 0;
                    line-height: 23px;
                    word-wrap: break-word;
                    word-break: normal;
                }
                .article-page article p code {
                    padding: 3px 4px;
                    color: #c7254e;
                    background-color: #f9f9fd;
                    margin: 0 2px;
                    font-size: 96%;
                    word-wrap: break-word;
                    word-break: normal;
                }
                .article-page article blockquote {
                    background: #f5f5f5;
                    background-color: rgba(0, 0, 0, 0.05);
                    border-left: 5px solid #ccc;
                    padding: 6px 8px;
                    font-size: 14px;
                    margin-bottom: 22px;
                }
                .article-page article blockquote p,
                .article-page article ol p,
                .article-page article ul li p {
                    padding: 0;
                }
                .article-page article ul {
                    margin-left: 24px;
                    list-style: disc;
                }
                .article-page article ul ul {
                    list-style: circle;
                }
                .article-page article ol {
                    list-style: decimal;
                    margin-left: 38px;
                }
                .article-page article ol li {
                    line-height: 30px;
                }
                .article-page article pre code {
                    overflow: auto;
                    max-height: 500px;
                    position: relative;
                }
                .article-page article pre code:before {
                    position: absolute;
                    top: 0;
                    color: #9b9b9b;
                    font-size: 12px;
                    display: block;
                    right: 0;
                    padding: 2px 6px;
                }
                .article-page article pre code.javascript:before {
                    content: "JavaScript";
                }
                .article-page article pre code.html:before {
                    content: "HTML";
                }
                .article-page article pre code.bash:before {
                    content: "Shell";
                }
                .article-page article pre code.css:before {
                    content: "CSS";
                }
                .article-page article pre code.vue:before {
                    content: "VUE";
                }
                .article-page article table {
                    border-top: 2px solid #eee;
                    border-bottom: 2px solid #eee;
                    padding: 0;
                    border-collapse: collapse;
                    margin: 10px 0;
                    max-width: 100%;
                    width: 100%;
                }
                .article-page article table td,
                .article-page article table th {
                    height: 30px;
                    font-size: 15px;
                    padding: 1px 1px 1px 8px;
                    border-right: 1px solid #eee;
                }
                .article-page article table td:last-child,
                .article-page article table th:last-child {
                    border-right: 0;
                }
                .article-page article table tr {
                    border-bottom: 1px solid #eee;
                }
                .article-page article table tr:nth-child(odd) {
                    background: #fbfbfb;
                }
                .article-page article table thead tr {
                    background-color: #fff !important;
                }
                .bigimg {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 99;
                    top: 0;
                    left: 0;
                    display: none;
                    cursor: -webkit-zoom-out;
                    cursor: zoom-out;
                }
                .bigimg img {
                    display: block;
                    position: absolute;
                    max-width: 99%;
                    max-height: 99%;
                    width: 0;
                    height: 0;
                    -webkit-transition: all 0.4s;
                    transition: all 0.4s;
                    left: 50%;
                    top: 10px;
                    -webkit-transform: translate3d(-50%, 0, 0);
                    transform: translate3d(-50%, 0, 0);
                }
                .recommend {
                    margin-top: 30px;
                }
                .recommend h2 {
                    font-size: 20px;
                    margin-bottom: 3px;
                }
                .recommend ul {
                    list-style-type: disc;
                    margin-left: 15px;
                }
                .recommend li span {
                    font-size: 13px;
                }
                .sidenav {
                    width: 200px;
                    position: fixed;
                    bottom: 50px;
                    left: 50%;
                    -webkit-transform: translateX(274px);
                    transform: translateX(274px);
                    display: none;
                }
                .sidenav .uu {
                    border-bottom: 1px dashed #9f9f9f;
                    margin-bottom: 3px;
                    padding-bottom: 3px;
                }
                .sidenav .catelog {
                    padding: 8px;
                    background: #fcfcfc;
                    z-index: 2;
                }
                .sidenav .nav_switch {
                    cursor: pointer;
                    display: block;
                    height: 45px;
                    margin-bottom: 5px;
                    margin-left: 5px;
                    position: relative;
                    width: 45px;
                    margin-top: 7px;
                    outline: 0;
                }
                .sidenav .ceng_0 {
                    margin-left: 0;
                }
                .sidenav .nav_switch_active {
                    background-position: -104px 0;
                }
                .sidenav .ceng_1 {
                    margin-left: 20px;
                }
                .sidenav .ceng_2 {
                    margin-left: 40px;
                }
                .sidenav .ceng_3 {
                    margin-left: 60px;
                }
                .sidenav .catelog a {
                    text-decoration: none;
                    color: #555;
                    display: block;
                    padding: 3px;
                    font-size: 14px;
                    -webkit-transition: all 0.1s;
                    transition: all 0.1s;
                }
                .sidenav .catelog .active,
                .sidenav .catelog .active:hover,
                .sidenav .catelog a:hover {
                    color: #c7254e;
                    text-decoration: underline;
                }
                .ss_link {
                    background: #f5f5f5;
                    background-color: rgba(0, 0, 0, 0.05);
                    border-left: 5px solid #ccc;
                    margin-top: 36px;
                    padding: 6px 8px;
                    font-size: 14px;
                }
                .ss_link p {
                    word-break: break-all;
                }
                .wechat_pub img {
                    width: 200px;
                    height: 200px;
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
        <p>我们在平时会用弹窗或者 toast 对用户进行提示，而弹窗是属于强提示类型的（需要用户点击等交互后弹窗才消失），提供的信息量也大，而 toast 提示则属于弱提示类型（无论用户有没有看到，反正我提示了），仅进行小小的提醒。</p><p>弹窗类型的交互通常可以多个弹窗叠加，用户关闭一个后，再看下一个；而 toast 提示通常在同一时间只显示一个，那么如果同时多个 toast 需要提示时，怎么办？</p><ul><li><p>ant design 中的做法是同时将多个 toast 放到一个容器里（没有该容器则创建，有则直接使用），从上往下都展示出来【<a href="https://ant.design/components/message-cn" target="_blank">ant design message</a>】，</p></li><li><p>我们是为了跟新闻客户端 APP 的提示更加贴近，同一时间只弹一个，其他的先缓存起来。</p></li></ul><p>我们接下来把这两种方式都实现一下。</p><h3>1. 先实现一个简单的 toast</h3><p>我们先来实现一个简单的 toast，然后再说如何控制多个 toast 的先后提示。</p><pre><code class="javascript hljs"><span class="hljs-comment">// 在浏览器上模拟toast提示</span>
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
