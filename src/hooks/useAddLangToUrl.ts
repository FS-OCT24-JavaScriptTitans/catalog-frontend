import { useLocation } from 'react-router-dom';

export const useAddLangToUrl = () => {
  const location = useLocation();

  const getUrlWithLang = (to: string): string => {
    const currentParams = new URLSearchParams(location.search);
    const lang = currentParams.get('lang');

    const toUrl = new URL(to, window.location.origin);

    if (lang) {
      toUrl.searchParams.set('lang', lang);
    }

    return `${toUrl.pathname}${toUrl.search}`;
  };

  return { getUrlWithLang };
};
