// useApi.ts
import axios from 'axios';
import { useState, useEffect } from 'react';
const useApi = (apiEndpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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
            }
            catch (err) {
                if (isMounted) {
                    setError(err);
                }
            }
            finally {
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
