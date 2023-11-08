import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  CartPage,
  InfoGamePage,
  LoginPage,
  NotFoundPage,
  OrderPage,
  RegisterPage,
  StorePage,
} from './pages';
import { AppLayout, Loader, ProtectedRoute } from './ui';

export const routes = {
  store: '/store',
  order: '/order',
  cart: '/cart',
  game: '/game',
  login: '/login',
  register: '/register',
} as const;

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to={routes.store} />} />
          <Route
            path={routes.store}
            element={
              <Suspense fallback={<Loader center />}>
                <StorePage />
              </Suspense>
            }
          />
          <Route
            path={routes.order}
            element={
              <ProtectedRoute>
                <Suspense fallback={<Loader center />}>
                  <OrderPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.cart}
            element={
              <Suspense fallback={<Loader center />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path={routes.game + '/:id'}
            element={
              <Suspense fallback={<Loader center />}>
                <InfoGamePage />
              </Suspense>
            }
          />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
