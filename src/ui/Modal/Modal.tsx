import {
  FC,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/classNames';

interface IModalContext {
  activeId: string | null;
  open: (id: string) => void;
  close: () => void;
}

const ModalContext = createContext<IModalContext>({
  activeId: '',
  close: () => {},
  open: () => {},
});

interface ButtonProps {
  children: ReactElement;
  id?: string;
}

const Button: FC<ButtonProps> = ({ children, id = '' }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(id) });
};

interface ContentProps {
  children: ReactElement;
  className?: string;
  id?: string;
}

const Content: FC<ContentProps> = ({ children, className, id = '' }) => {
  const { activeId, close } = useContext(ModalContext);
  const isEqual = activeId === id;
  const ref = useOutsideClick<HTMLDivElement>(close);

  return createPortal(
    <div className={cn(styles.overlay, isEqual && styles.show)}>
      <div ref={ref} className={cn(styles.content, className)}>
        {cloneElement(children, { isOpenModal: isEqual })}
      </div>
    </div>,
    document.body
  );
};

export const Modal = ({ children }: PropsWithChildren) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const open = (id: string) => setActiveId(id);
  const close = () => setActiveId(null);

  return (
    <ModalContext.Provider value={{ activeId, open, close }}>{children}</ModalContext.Provider>
  );
};

Modal.Button = Button;
Modal.Content = Content;
