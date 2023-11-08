import { useMutation } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/App';
import { useCart } from '@/context/Cart';
import { createOrder } from '@/services/apiOrders';

export const useCreateOrder = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => createOrder(cart),
    onSuccess: () => {
      toast.success('Благодарим за вашу покупку');
      clearCart();
      navigate(routes.order);
    },
    onError: () => toast.error('Произошла непредвиденная ошибка, попробуйте позже'),
  });

  return { createOrder: mutate, error, isLoading };
};
