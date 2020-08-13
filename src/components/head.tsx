import NextHead from "next/head";

const Head = ({ title }: { title?: string }): JSX.Element => {
    return (<NextHead>
        <title>{title}-蚊子-前端博客</title>
        <meta name="generator" content="wenzi" />
        <meta name="keywords" content="wenzi,蚊子,前端开发,前端博客,技术博客,前端技术博客,首页" />
        <meta name="description" content="蚊子在前端开发工作中的总结，梳理思路，沉淀自己；学习新技术，记录过程，也可以帮助和我一样的同学更快的学习，分享。蚊子的个人博客、前端博客、个人博客、技术博客" />
        <meta name="author" content="蚊子" />
        <meta name="viewport" content="initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <link rel="shortcut icon" href="/favicon.ico"></link>
    </NextHead>);
}

Head.defaultProps = {
    title: '首页'
};

export default Head;