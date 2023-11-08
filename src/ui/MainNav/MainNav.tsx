import { FC } from 'react';

import { FaClipboardList, FaShoppingCart } from 'react-icons/fa';
import { GiGamepad } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

import { routes } from '@/App';
import { cn } from '@/utils/classNames';

interface MainNavProps {
  className?: string;
}

export const MainNav: FC<MainNavProps> = ({ className }) => (
  <nav className={cn(styles.mainNav, className)}>
    <ul>
      <li className={styles.navItem}>
        <NavLink to={routes.store}>
          <GiGamepad />
          <span>Магазин</span>
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink to={routes.order}>
          <FaClipboardList />
          <span>Покупки</span>
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink to={routes.cart}>
          <FaShoppingCart />
          <span>Корзина</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);
