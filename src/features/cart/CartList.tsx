import { FC } from 'react';

import { CartItem } from './CartItem';
import styles from './styles.module.scss';

import { useCart } from '@/context/Cart';
import { cn } from '@/utils/classNames';

interface CartListProps {
  className?: string;
}

export const CartList: FC<CartListProps> = ({ className }) => {
  const { cart } = useCart();

  return (
    <div className={cn(styles.cartList, className)}>
      {cart.map((game) => (
        <CartItem key={`${game._id}_${game.platform}`} game={game} />
      ))}
    </div>
  );
};
