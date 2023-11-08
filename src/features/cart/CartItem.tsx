import { FC } from 'react';

import styles from './styles.module.scss';

import { GameCart } from './types/GameCart';

import { useCart } from '@/context/Cart';
import { Button, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface CartItemProps {
  className?: string;
  game: GameCart;
}

export const CartItem: FC<CartItemProps> = ({ className, game }) => {
  const { imageUrl, name, platform, price } = game;
  const { removeGame } = useCart();

  return (
    <div className={cn(styles.cartItem, className)}>
      <div className={styles.img}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.about}>
        <Title>{name}</Title>
        <span className={styles.platform}>Платформа: {platform}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{price}$</div>
        <Button onClick={() => removeGame(game)} theme='outline' size='s'>
          Удалить
        </Button>
      </div>
    </div>
  );
};
