import { GameCart } from '@/features/cart/types/GameCart';

export interface Order {
  _id: string;
  customer: string;
  order: GameCart[];
  createdAt: string;
  updatedAt: string;
}
