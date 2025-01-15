import { useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext/ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};
