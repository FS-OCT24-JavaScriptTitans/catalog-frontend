<<<<<<< HEAD
import { FC, ReactNode } from 'react';

import s from './Container.module.scss';

interface Props {
  title: string;
  titlePB?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ title, titlePB, children }) => (
  <section>
    <div className={s.container}>
      <h2
        className={s.title}
        style={{ paddingBottom: titlePB }}
      >
        {title}
      </h2>

      {children}
    </div>
  </section>
);
=======
import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <section>
    <div className={styles.container}>{children}</div>
  </section>
);

export default Container;
>>>>>>> bd0c5eb (add for pull other changes)
