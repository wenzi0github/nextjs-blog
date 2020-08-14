import Head from "@/components/head";
import Nav from "@/components/nav";
import Article from "@/components/home/article";
import ASide from "@/components/home/aside";

export default function Home() {
    const articles = new Array(20).fill({
        url: '/post/fe/how-write-weekly.html',
        title: '技术人员如何写好周报和日报',
        desc: '经常有人在纠结自己的周报或者日报该如何写，经常是自己写了很多东西，但又不知道怎么提炼，这里提供一个模板，供大家平时使用',
        date: '2020/08/12',
        comments: 20
    });
    return (
        <div className="home-page">
            <Head />
            <Nav />
            <div className="container">
                <Article articles={articles} />
                <ASide />
            </div>
            <style jsx>{`
                .container {
                    max-width: 1080px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    );
}
