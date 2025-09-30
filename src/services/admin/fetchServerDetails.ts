import { type AxiosRequestConfig } from 'axios';
import executeRequest from '../../utils/HttpClient';

const fetchServerDetails = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: 'http://localhost:8080/news-aggregator/api/v1/admin/server',
    withCredentials: true,
  };

  try {
    const response = await executeRequest(requestConfig);
    return response;
  } catch (error) {
    console.log('Unexpected error: ', error);
  }
};

export default fetchServerDetails;
