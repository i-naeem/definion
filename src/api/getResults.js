import { apiUrl } from '../constants';

export const getResults = async (word) => {
  const url = apiUrl + '/' + word;
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  const error = await response.json();
  throw new Error(error.message);
};
