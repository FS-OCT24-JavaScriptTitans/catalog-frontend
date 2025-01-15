import { useEffect, useState } from 'react';

import s from './ThemeSwitcher.module.scss';

import useLocaLStorage from '@/hooks/useLocaLStorage';

const DARK = 'dark';

export const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { setItem, getItem, removeItem } = useLocaLStorage('theme');
  const root = document.querySelector('#root');

  useEffect(() => {
    const theme = getItem();

    if (theme) {
      root?.classList.remove(DARK);
      removeItem();
    } else {
      root?.classList.add(DARK);
      setItem(DARK);
    }
  }, [getItem, isDarkTheme, removeItem, root?.classList, setItem]);

  return (
    <span className={s.container}>
      <label className={s.switch}>
        <input
          type="checkbox"
          className={s.input}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
        />
        <span className={s.slider}></span>
      </label>
    </span>
  );
};
