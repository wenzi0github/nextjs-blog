const ASide = () => {
    return (<aside className="aside">
        <div className="about">
            <h4 className="v-section-tit">About wenzi</h4>
            <article className="violet-about-det">
                <p className="my-face"><img src="/data/img/avatar.png" alt="Hello wenzi!" width="40px" height="40px" id="J_myFace_img" /></p>
                <p>Front-end Engineer，前端开发工程师</p>
                <p>目前是一名前端开发工程师，主要负责前端规划、框架与架构、前端性能优化。</p>
                <p>专注前端技术，关注交互体验，擅长web ajax开发。</p>
                <p>坚信前端工程师的价值是最终能把技术和设计完美结合在一起。用最新的技术方案巧妙地帮助这些设计得以实现。</p>
            </article>
            <p className="v-more-right">
                <a href="/about.html"><span>&#10149;</span>More</a>
            </p>
        </div>
        <div className="attent">
            <h4 className="v-section-tit">Follow Me</h4>
            <div style={{ textAlign: 'center' }}>
                <img src="//wx4.sinaimg.cn/large/70f933e9ly1fblv409e8oj2076076mxn.jpg" alt="qrcode" style={{ width: '200px', height: '200px' }} />
                <p>欢迎关注我的微信公众号： <b>wenzichel</b></p>
            </div>
        </div>
        <div className="friendly">
            <h4 className="v-section-tit">My Links</h4>
            <article className="attent-det">
                <ul>
                    <li><a href="https://github.com/wenzi0github" target="_blank" title="my github"><span>GitHub</span></a></li>
                </ul>
            </article>
        </div>
    </aside>);
}

export default ASide;