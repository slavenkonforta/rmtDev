import React from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import App from './components/App.tsx';
import './index.css';
import { ThemeProvider } from './components/theme-provider.tsx';
import { toast } from './components/ui/use-toast.ts';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query?.meta?.errorMessage) {
        toast({
          variant: 'destructive',
          description: `${query.meta.errorMessage}`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        });
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
