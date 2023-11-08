import { FC } from 'react';

import { Cart } from '@/features';

interface CartPageProps {
  className?: string;
}

const CartPage: FC<CartPageProps> = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
