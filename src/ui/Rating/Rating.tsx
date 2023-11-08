import { FC } from 'react';

import { AiOutlineStar } from 'react-icons/ai';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface RatingProps {
  className?: string;
  countStars?: number;
  rating?: number;
  height: number;
  width: number;
}

export const Rating: FC<RatingProps> = ({
  className,
  height,
  width,
  rating = 0,
  countStars = 5,
}) => {
  const sizeStar = {
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <div className={cn(styles.rating, className)}>
      {Array.from({ length: countStars }, (_, i) => (
        <AiOutlineStar style={sizeStar} key={i} className={cn(rating >= i + 1 && styles.fill)} />
      ))}
    </div>
  );
};
