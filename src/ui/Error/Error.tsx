import { FC } from 'react';

import styles from './styles.module.scss';

import { Button, Title } from '..';

import { cn } from '@/utils/classNames';

interface ErrorProps {
  className?: string;
  msg: string;
  reload?: boolean;
}

export const Error: FC<ErrorProps> = ({ className, msg, reload = true }) => {
  return (
    <div className={cn(styles.error, className)}>
      <Title size='xl'>{msg}</Title>
      {reload && (
        <Button theme='primary' size='m' onClick={() => window.location.reload()}>
          Перезагрузить страницу
        </Button>
      )}
    </div>
  );
};
