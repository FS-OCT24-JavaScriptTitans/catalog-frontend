import useLocaLStorage from './useLocaLStorage';

import { LANGUAGE } from '@/constants/language';
import i18n from '@/i18n';

export const useLanguage = () => {
  const { setItem, getItem: getLanguage } = useLocaLStorage('i18nextLng');

  const setLanguage = (language: LANGUAGE) => {
    i18n.changeLanguage(language);
    setItem(language);
  };

  return { setLanguage, getLanguage };
};
