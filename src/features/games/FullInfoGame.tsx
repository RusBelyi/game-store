import { useQueryClient } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { useFullGame } from './useFullGame';

import { GameCart } from '../cart/types/GameCart';

import { KEY_QUERY_GAME_BY_ID, choisePlatforms } from '@/config/consts';
import { useCart } from '@/context/Cart';
import { Button, Error, Loader, Rating, Select, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface FullInfoGameProps {
  className?: string;
}

export const FullInfoGame: FC<FullInfoGameProps> = ({ className }) => {
  const { data, error, isLoading } = useFullGame();
  const queryClient = useQueryClient();
  const { addGame } = useCart();
  const filteredPlatforms = choisePlatforms.filter((el) => data?.platform.includes(el.value));
  const [platform, setPlatform] = useState('');

  const handleAddGame = () => {
    if (!data) return;
    const game: GameCart = {
      _id: data._id,
      name: data.name,
      price: data.price,
      platform: platform,
      imageUrl: data.imageUrl,
      amount: 1,
    };
    addGame(game);
  };

  useEffect(() => {
    if (data && !platform) setPlatform(data.platform[0]);
  }, [data]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [KEY_QUERY_GAME_BY_ID] });
    };
  }, []);

  if (isLoading && !data) return <Loader center />;
  if (error) return <Error msg='Игра не найдена' />;

  return (
    <div className={cn(styles.fullInfoGame, className)}>
      <div className={styles.left}>
        <Title className={styles.title} size='xl'>
          {data?.name}
        </Title>
        <div className={styles.rating}>
          <Rating rating={data?.rating} height={20} width={20} />
          <div className={styles.age}>{data?.ageLimit}+</div>
        </div>

        <div className={styles.video}>
          <iframe
            src={data?.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>

        <div className={styles.description}>{data?.description}</div>

        <div className={styles.genresBox}>
          <span className={styles.genresTitle}>Жанры</span>
          <div className={styles.genresList}>
            <span>{data?.genre}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.choisePlatform}>
          <div className={styles.price}>{data?.price}$</div>
          <Select
            onChange={(val) => setPlatform(val)}
            value={platform}
            options={filteredPlatforms}
          />
        </div>
        <Button onClick={handleAddGame} theme='primary' size='m'>
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
};
