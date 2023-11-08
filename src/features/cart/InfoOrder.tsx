import { FC } from 'react';

import styles from './styles.module.scss';

import { useCreateOrder } from '../orders/useCreateOrder';

import { routes } from '@/App';
import { useCart } from '@/context/Cart';
import { useAuth } from '@/hooks/useAuth';
import { Button, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface InfoOrderProps {
  className?: string;
}

export const InfoOrder: FC<InfoOrderProps> = ({ className }) => {
  const { cart } = useCart();
  const isAuth = useAuth();
  const { createOrder, isLoading } = useCreateOrder();
  const totalPrice = cart.reduce((acc, game) => acc + game.price, 0).toFixed(2);
  const totalCount = cart.length;

  return (
    <div className={cn(styles.infoOrder, className)}>
      <div className={styles.header}>
        <Title tag='h2'>Итого</Title>
        <div className={styles.totalPrice}>{totalPrice}$</div>
      </div>
      <div className={styles.center}>
        {cart.map((game) => (
          <div key={`${game._id}_${game.platform}`} className={styles.centerItem}>
            <div className={styles.name}>
              {game.name}({game.platform})
            </div>
            <div className={styles.gamePrice}>{game.price}$</div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.totalCount}>Колличество: {totalCount}</div>
        {isAuth ? (
          <Button disabled={isLoading} onClick={() => createOrder()} size='m' theme='primary'>
            Купить
          </Button>
        ) : (
          <Button to={routes.login} size='m' theme='primary'>
            Авторизация
          </Button>
        )}
      </div>
    </div>
  );
};
