import axios from 'axios';

export const createFile = async (url: string, name: string, type?: string) => {
  const response = await axios.get(url, { responseType: 'blob' });
  const data = await response.data;
  const metadata = {
    type: type || 'image/jpeg',
  };
  return new File([data], url, metadata);
};
