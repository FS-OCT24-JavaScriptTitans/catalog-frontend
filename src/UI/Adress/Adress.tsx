import { FC } from 'react';

import s from './Adress.module.scss';

interface Props {
  adresses: { label: string; value: string | number }[];
}

export const Adress: FC<Props> = ({ adresses }) => (
  <address>
    <h3 className={s.title}>Adress:</h3>

    {adresses.map(({ label, value }) => (
      <span
        className={s.label}
        key={label}
      >
        {label} <span className={s.value}>{value}</span>
      </span>
    ))}
  </address>
);
