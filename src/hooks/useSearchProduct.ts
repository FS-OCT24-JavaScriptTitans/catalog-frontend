import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';

export const useSearchProduct = (handleSearch: (query: string) => void) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const debouncedHandleSearch = debounce((query: string) => handleSearch(query), 300);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        navigate('/');
        setQuery('');
      }
    },
    [navigate],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const trimmedQuery = e.target.value.trim();

      setQuery(trimmedQuery);
      debouncedHandleSearch(trimmedQuery);
    },
    [debouncedHandleSearch],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return { query, handleChange };
};
