import { FC } from 'react';

import styles from './styles.module.scss';

import { useOrders } from './useOrders';

import { Empty, Loader } from '@/ui';
import { cn } from '@/utils/classNames';

interface OrdersListProps {
  className?: string;
}

export const OrdersList: FC<OrdersListProps> = ({ className }) => {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader center />;
  if (orders && !orders.length) return <Empty>Вы еще ничего не купили 😅</Empty>;

  return (
    <div className={cn(styles.ordersList, className)}>
      <div className={styles.header}>
        <span>Игра</span>
        <span>Платформа</span>
        <span>Цена</span>
        <span>Дата покупки</span>
      </div>

      {orders?.map((order) =>
        order.order.map((el) => {
          const date = new Date(order.createdAt);

          return (
            <div key={`${el._id}_${el.platform}_${date}}`} className={styles.body}>
              <span>{el.name}</span>
              <span>{el.platform}</span>
              <span>{el.price}$</span>
              <span>{date.toLocaleString('ru')}</span>
            </div>
          );
        })
      )}
    </div>
  );
};
