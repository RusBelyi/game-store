import { useQuery } from '@tanstack/react-query';

import { KEY_QUERY_ORDERS } from '@/config/consts';
import { fetchOrders } from '@/services/apiOrders';

export const useOrders = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [KEY_QUERY_ORDERS],
    queryFn: fetchOrders,
  });

  return { orders: data, error, isLoading };
};
