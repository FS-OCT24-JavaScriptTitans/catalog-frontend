import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <section className={`${styles.container} ${className || ''}`}>
    <div className={styles.wrapper}>{children}</div>
  </section>
);

export default Container;
