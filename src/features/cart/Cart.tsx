import { FC } from 'react';

import { CartList } from './CartList';
import { InfoOrder } from './InfoOrder';
import styles from './styles.module.scss';

import { ClearCart } from '..';

import { useCart } from '@/context/Cart';
import { Empty, Row, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface CartProps {
  className?: string;
}

export const Cart: FC<CartProps> = ({ className }) => {
  const { cart } = useCart();

  if (!cart.length) return <Empty>Ваша корзина пуста 😞</Empty>;

  return (
    <>
      <Row>
        <Title size='xl'>Корзина</Title>
        <ClearCart />
      </Row>

      <div className={cn(styles.cart, className)}>
        <CartList />
        <InfoOrder />
      </div>
    </>
  );
};
