// useApi.ts
import axios from 'axios';
import { useState, useEffect } from 'react';

const useApi = (apiEndpoint: string) => { // Add the 'apiEndpoint' argument here
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiEndpoint);
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiEndpoint]);

  return { data, loading, error };
};

export default useApi;
