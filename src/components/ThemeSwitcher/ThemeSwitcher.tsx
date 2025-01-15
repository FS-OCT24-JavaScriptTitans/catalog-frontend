import s from './ThemeSwitcher.module.scss';

import { Theme } from '@/types/Theme';
import { useTheme } from '@/hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  };

  return (
    <span className={s.container}>
      <label className={s.switch}>
        <input
          type="checkbox"
          className={s.input}
          onChange={handleSwitchTheme}
        />
        <span className={s.slider}></span>
      </label>
    </span>
  );
};
