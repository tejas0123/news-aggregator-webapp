import axios, { type AxiosRequestConfig } from 'axios';

const executeRequest = async (requestConfig: AxiosRequestConfig) => {
  try {
    const response = await axios(requestConfig);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Unexpected error: ', error);
    throw error;
  }
};

export default executeRequest;
