import Head from "@/components/head";
import Nav from "@/components/nav";
import Article from "@/components/home/article";
import ASide from "@/components/home/aside";

export default function Home() {
    return (<div className="home-page">
        <Head />
        <Nav />
        <div className="container">
            <Article />
            <ASide />
        </div>
    </div>)
}
