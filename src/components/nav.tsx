const Nav = () => {
    return (
        <>
            <a id="top"></a>
            <header>
                <div className="content">
                    <a className="logo" href="/">
                        Wenzi
                    </a>
                    <nav>
                        <em></em>
                        <ul>
                            <li>
                                <a title="首页" href="/">
                                    首页
                                </a>
                            </li>
                            <li>
                                <a title="归档" href="/archive.html">
                                    归档
                                </a>
                            </li>
                            <li>
                                <a title="标签" href="/tags.html">
                                    标签
                                </a>
                            </li>
                            <li>
                                <a title="关于" href="/about.html">
                                    关于
                                </a>
                            </li>
                            <li>
                                <a title="留言" href="/guest.html">
                                    留言
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <style jsx>{`
                header {
                    z-index: 10;
                    border-bottom: 1px solid #eaeaea;
                    height: 70px;
                }
                header .content {
                    display: flex;
                    justify-content: space-between;
                }
                header .logo {
                    display: block;
                    font-family: Courgette, cursive;
                    font-size: 25px;
                    font-weight: bolder;
                    color: #4d444f;
                    line-height: 25px;
                    margin: 12px 0 0 4px;
                }
                header ul {
                    display: block;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                }
                header ul li {
                    display: block;
                    margin-left: 8px;
                }
                header ul li a {
                    padding: 0 10px;
                    color: #333;
                    font-size: 16px;
                    display: block;
                    box-sizing: border-box;
                    height: 70px;
                    line-height: 70px;
                }
                header ul li a:hover {
                    color: #4183c4;
                    background-color: #eee;
                }
            `}</style>
        </>
    );
};

export default Nav;
