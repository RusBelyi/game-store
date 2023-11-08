import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type Themes = 'light' | 'dark';

interface ITheme {
  theme: Themes;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ITheme>({
  theme: 'light',
  toggleTheme: () => {},
});
export const useTheme = () => useContext(ThemeContext);

const defaultTheme = (localStorage.getItem('theme') as Themes) || 'dark';
document.body.dataset.theme = defaultTheme;

interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
