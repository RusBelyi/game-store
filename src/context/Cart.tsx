import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import toast from 'react-hot-toast';

import { GameCart } from '@/features/cart/types/GameCart';

interface ICartContext {
  cart: GameCart[];
  addGame: (game: GameCart) => void;
  removeGame: (game: GameCart) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  addGame: () => {},
  removeGame: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<GameCart[]>([]);

  const addGame = (game: GameCart) => {
    const data = localStorage.getItem('cart');
    const games: GameCart[] = data ? JSON.parse(data) : [];

    if (games.some((el) => el._id === game._id && el.platform === game.platform)) {
      toast.error('Игра уже добавлена в корзину');
      return;
    }

    games.push(game);

    localStorage.setItem('cart', JSON.stringify(games));
    setCart(games);
    toast.success(`Игра ${game.name}(${game.platform}) успешно добавлена в корзину`);
  };

  const removeGame = (game: GameCart) => {
    const data = localStorage.getItem('cart');
    const games: GameCart[] = data ? JSON.parse(data) : [];

    const idx = games.findIndex((el) => el._id === game._id && el.platform === game.platform);
    games.splice(idx, 1);

    localStorage.setItem('cart', JSON.stringify(games));
    setCart(games);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const value = useMemo(() => ({ cart, addGame, removeGame, clearCart }), [cart]);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    data ? setCart(JSON.parse(data)) : setCart([]);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
