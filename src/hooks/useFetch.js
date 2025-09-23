import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [api, setApi] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    setError(null); // resetear error cada vez que se llama
    try {
      const response = await axios.get(url);
      // Si album es null, dejamos array vacío
      setApi(response.data.album || []); 
    } catch (err) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { api, setApi, error, loading, refetch: fetchApi };
};

export default useFetch;
