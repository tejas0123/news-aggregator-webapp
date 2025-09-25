import axios from "axios";

const fetchNewsArticles = async (category: string) => {

  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?apiKey=53451ca6dd194f9e9f33a220b806d584&category=" + category,
  );
  
  return response.data.articles;
};

export const loadNewsArticles = async () => {
  const categories: string[] = [
    "business", "sports"
  ];

  const promises = categories.map((category) => fetchNewsArticles(category));
  const responses = await Promise.all(promises);
  return responses.flat();
}; 