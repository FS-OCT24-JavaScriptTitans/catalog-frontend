import { createContext } from 'react';

import { Theme } from '@/types/Theme';

interface Context {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Context>({ theme: Theme.LIGHT, setTheme: () => {} });
