const Nav = () => {
    return (<>
        <a id="top"></a>
        <header>
            <div className="content clearfix">
                <a className="logo" href="/">Wenzi</a>
                <nav>
                    <em></em>
                    <ul>
                        <li><a title="首页" href="/">首页</a></li>
                        <li><a title="归档" href="/archive.html">归档</a></li>
                        <li><a title="标签" href="/tags.html">标签</a></li>
                        <li><a title="关于" href="/about.html">关于</a></li>
                        <li><a title="留言" href="/guest.html">留言</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);
}

export default Nav;