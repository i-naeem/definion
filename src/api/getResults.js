import { apiUrl } from '../constants';

export const getResults = async (word) => {
  const url = apiUrl + '/' + word;
  const r = await fetch(url);
  return r.json();
};
