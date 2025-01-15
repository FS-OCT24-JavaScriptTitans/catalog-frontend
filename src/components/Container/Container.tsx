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
