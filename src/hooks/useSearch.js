import { useEffect, useState } from 'react';
import { getResults } from '../api/getResults';

export const useSearch = (word) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    getResults(word)
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [word]);

  return { loading, data, error };
};
