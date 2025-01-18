import { FC, ReactNode } from 'react';

import s from './Container.module.scss';

interface Props {
  title?: string;
  titlePB?: string;
  children: ReactNode;
  mb?: string;
  mt?: string;
}

export const Container: FC<Props> = ({ title, titlePB = '24px', children, mb, mt }) => (
  <section style={{ marginBottom: mb, marginTop: mt }}>
    <div className={s.container}>
      {title && (
        <h2
          className={s.title}
          style={{ paddingBottom: titlePB }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);
