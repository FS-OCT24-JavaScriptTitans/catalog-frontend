import { useNavigate, useSearchParams } from 'react-router-dom';

import useLocaLStorage from './useLocaLStorage';

import { LANGUAGE } from '@/constants/language';
import i18n from '@/i18n';

export const useLanguage = () => {
  const { setItem, getItem: getLanguage } = useLocaLStorage('i18nextLng');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const setLanguage = (language: LANGUAGE) => {
    i18n.changeLanguage(language);

    setItem(language);

    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set('lang', language);

    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  return { setLanguage, getLanguage };
};
