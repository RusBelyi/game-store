import { FC } from 'react';

import styles from './styles.module.scss';

import { useCart } from '@/context/Cart';
import { Button } from '@/ui';
import { cn } from '@/utils/classNames';

interface ClearCartProps {
  className?: string;
}

export const ClearCart: FC<ClearCartProps> = ({ className }) => {
  const { clearCart } = useCart();

  return (
    <Button onClick={clearCart} className={cn(styles.clearCart, className)}>
      Очистить корзину
    </Button>
  );
};
