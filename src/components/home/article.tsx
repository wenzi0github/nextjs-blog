const Article = ({ articles }: any) => {
    return (<div className='list'>
        {
            articles.map((article: any, index: number) => (<article key={index}>
                <h2><a href={article.url} className="title" title={article.title} rel="bookmark">{article.title}</a></h2>
                <p className="description">
                    {article.desc}<a href={article.url} className="more" title="Read More"><span>&#10149;</span>Read More</a>
                </p>
                <p className="date">
                    <span>posted @</span><time title="2020-08-12">{article.date}</time><span className="comment">评论({article.comments})</span>
                </p>
            </article>))
        }
        <style jsx>{`
            article {
                margin-bottom: 30px;
            }
            h2 {
                font-family: 'Songti SC','Noto Serif SC',STZhongsong,STKaiti,KaiTi,Roboto,serif;
                font-size: 24px;
                margin-bottom: 6px;
            }
            h2 a {
                color: #3E3B3F;
                transition: .2s all linear;
                position: relative;
            }
            h2 a:before {
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0px;
                width: 0;
                height: 2px;
                background: #3E3B3F;
                -webkit-transition: all .3s;
                transition: all .3s
            }
            h2 a:hover:before {
                width: 100%;
                left: 0;
                right: 0
            }
            .date {
                text-align: right;
                color: #666;
                font-size: 13px
            }
        `}</style>
    </div>)
}

export default Article;