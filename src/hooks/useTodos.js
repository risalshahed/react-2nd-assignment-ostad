import { CanceledError } from 'axios';
import axiosInstance from '../services/apiClient'
import { useEffect, useState } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchTodos = async () => {

      await axiosInstance
        // get the endpoint
        .get('/todos', { signal: controller.signal })
        .then(res => setTodos(res.data))
        .catch(err => {
          if(err instanceof CanceledError) return;
          setError(err.message);        
        });
    }

    fetchTodos();

    return () => controller.abort();
    
  }, []);

  return { todos, setTodos, error };
}