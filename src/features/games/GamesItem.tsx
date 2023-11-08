import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { IGame } from './types/IGame';

import { routes } from '@/App';
import { Rating, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface GamesItemProps {
  className?: string;
  game: IGame;
  onClick?: () => void;
}

export const GamesItem: FC<GamesItemProps> = ({ className, game }) => {
  const { _id, genre, imageUrl, price, rating, name } = game;
  return (
    <li className={cn(styles.gamesItem, className)}>
      <Link className={styles.gamesLink} to={`${routes.game}/${_id}`}>
        <div className={styles.img}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={styles.content}>
          <Title tag='h2' size='l'>
            {name}
          </Title>
          <div className={styles.genre}>{genre}</div>
          <div className={styles.footer}>
            <div className={styles.price}>{price}$</div>
            <Rating rating={rating} height={30} width={30} />
          </div>
        </div>
      </Link>
    </li>
  );
};
