import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate, useSearchParams } from 'react-router-dom';

const DELAY = 300;

type UseSearchProduct = (
  handleSearch: (query: string) => void,
  onClose?: () => void,
) => {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

export const useSearchProduct: UseSearchProduct = (handleSearch, onClose) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const lang = searchParams.get('lang') || '';

  const debouncedHandleSearch = debounce((query: string) => handleSearch(query), DELAY);

  const handleSubmit = useCallback(() => {
    if (query.trim().length >= 3) {
      navigate(`/search?query=${query}&lang=${lang || 'en'}`);
      setQuery('');
      onClose?.();
    }

    setTimeout(() => onClose?.(), DELAY);
  }, [query, lang, navigate, onClose]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Enter' && query.trim().length >= 3) {
        handleSubmit();
      }
    },
    [handleSubmit, query],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      debouncedHandleSearch(e.target.value);
    },
    [debouncedHandleSearch],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return { query, handleChange, handleSubmit };
};
