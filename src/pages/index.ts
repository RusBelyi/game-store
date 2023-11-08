import { lazy } from 'react';

export const OrderPage = lazy(() => import('./OrderPage/OrderPage'));
export const StorePage = lazy(() => import('./StorePage/StorePage'));
export const CartPage = lazy(() => import('./CartPage/CartPage'));
export const InfoGamePage = lazy(() => import('./InfoGamePage/InfoGamePage'));
export { NotFoundPage } from './NotFoundPage/NotFoundPage';
export { LoginPage } from './LoginPage/LoginPage';
export { RegisterPage } from './RegisterPage/RegisterPage';
