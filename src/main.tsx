import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { Toaster } from 'react-hot-toast';

import { App } from './App';
import { CartProvider } from './context/Cart';
import { ThemeProvider } from './context/Theme';
import { ErrorBoundary } from './ui';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <ThemeProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <App />
          <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--bg-color-inverted)',
                color: 'var(--primary-color-inverted)',
              },
            }}
          />
        </QueryClientProvider>
      </CartProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
