import axios, { type AxiosRequestConfig } from 'axios';

const executeRequest = async (requestConfig: AxiosRequestConfig) => {
  try {
    const response = await axios(requestConfig);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error: ', error.message, error.response?.data);
    } else {
      console.error('Unexpected error: ', error);
    }
    throw error;
  }
};

export default executeRequest;
