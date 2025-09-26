import { type AxiosRequestConfig } from 'axios';
import executeRequest from '../utils/HttpClient';
const fetchNewsArticles = async (category: string) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines',
    params: {
      category: category,
      apiKey: '53451ca6dd194f9e9f33a220b806d584',
    },
  };

  const response = await executeRequest(requestConfig);

  console.log(response);
  return response.data.articles;
};

export const loadNewsArticles = async () => {
  const categories: string[] = ['business', 'sports'];

  const promises = categories.map((category) => fetchNewsArticles(category));
  const responses = await Promise.all(promises);
  return responses.flat();
};
