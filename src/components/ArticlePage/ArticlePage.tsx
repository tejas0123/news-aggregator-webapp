import "./ArticlePage.css"
import type { Article } from "../../types/Article";

type ArticleProps = {
  article: Article
}

const ArticlePage = ({ article }: ArticleProps) => {
    return (
        <>
          <div id="articlePage">
            <h1>{article.title}</h1>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={{ maxWidth: "400px", display: "block" }}
                />
              )}

              <div className="articleHeader">
                <p>Date: {article.publishedAt.slice(0, 10)}</p>
                {article.author && <p>Author: {article.author}</p>}
              </div>

              { article.content && <div className="articleContent">{article.content}</div> }
              
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more..
              </a>
          </div>
        </>
    );
}

export default ArticlePage