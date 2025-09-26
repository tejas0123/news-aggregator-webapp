import './Home.css';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { loadNewsArticles } from '../../services/newsLoader';
import ArticlePage from '../ArticlePage/ArticlePage';
import type { Article } from '../../types/article';

const Home = () => {
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await loadNewsArticles();
        setArticlesData(articles);
      } catch (err) {
        console.error('Error loading articles', err);
      }
    };

    fetchData();
  }, []);

  if (selectedArticle) {
    return (
      <>
        <Navbar />
        <ArticlePage article={selectedArticle} />
        <br />
        <button
          className="navigateBack"
          onClick={() => setSelectedArticle(null)}
        >
          Back
        </button>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h1 id="articlesHeading">Articles</h1>
      <div id="articlesList">
        <ul>
          {articlesData.map((article: Article, i) => (
            <li
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setSelectedArticle(article);
              }}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
