import { FC, ReactElement, cloneElement } from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { Title } from '@/ui';

interface AuthTemplateProps {
  className?: string;
  title: string;
  label: string;
  children: ReactElement;
  link?: string;
  isOpenModal?: boolean;
  to: string;
}

export const AuthTemplate: FC<AuthTemplateProps> = ({
  link,
  title,
  label,
  children,
  isOpenModal,
  to,
}) => {
  return (
    <div className={styles.authTemplate}>
      <Title className={styles.title} size='xl'>
        {title}
      </Title>
      {cloneElement(children, { isOpenModal })}
      <div className={styles.label}>
        {label} <Link to={to}>{link}</Link>
      </div>
    </div>
  );
};
