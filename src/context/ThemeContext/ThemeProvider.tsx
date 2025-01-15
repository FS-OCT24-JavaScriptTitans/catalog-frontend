import { useEffect, useState } from 'react';

import { ThemeContext } from './ThemeContext';

import useLocaLStorage from '@/hooks/useLocaLStorage';
import { Theme } from '@/types/Theme';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const { setItem, getItem, removeItem } = useLocaLStorage('theme');
  const root = document.querySelector('#root');

  useEffect(() => {
    const initialTheme = getItem();

    if (initialTheme) {
      root?.classList.remove(Theme.DARK);
      removeItem();
    } else {
      root?.classList.add(Theme.DARK);
      setItem(Theme.DARK);
    }
  }, [getItem, theme, removeItem, root?.classList, setItem]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
