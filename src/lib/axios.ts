import axios from 'axios';
import { useMemo } from 'react';

export const useApi = () => {
  const api = useMemo(() => {
    return axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  return api;
};
