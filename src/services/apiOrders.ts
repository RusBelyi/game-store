import { $api } from '@/config/api';
import { GameCart } from '@/features/cart/types/GameCart';
import { Order } from '@/features/orders/types/Order';

export const fetchOrders = async () => {
  const { data } = await $api.get<Order[]>('/orders');
  return data;
};

export const createOrder = async (order: GameCart[]) => {
  const { data } = await $api.post<Order[]>('/orders', order);
  return data;
};
