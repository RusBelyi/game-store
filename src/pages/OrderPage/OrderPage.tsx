import { FC } from 'react';

import { OrdersList } from '@/features';
import { useOrders } from '@/features/orders/useOrders';
import { Error, Row, Title } from '@/ui';

interface OrderPageProps {
  className?: string;
}

const OrderPage: FC<OrderPageProps> = () => {
  const { error } = useOrders();
  return (
    <>
      <Row>
        <Title size='xl'>Ваши покупки</Title>
      </Row>
      {!!error ? <Error msg='Не удалось получить список ваших покупок' /> : <OrdersList />}
    </>
  );
};

export default OrderPage;
