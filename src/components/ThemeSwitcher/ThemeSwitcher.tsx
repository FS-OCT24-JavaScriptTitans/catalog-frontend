import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => (
  <span className={s.container}>
    <label className={s.switch}>
      <input
        type="checkbox"
        className={s.input}
      />
      <span className={s.slider}></span>
    </label>
  </span>
);
