import { useContext } from 'react';
import { SearchTextContext } from '@/contexts/search-text-context-provider';

export const useSearchTextContext = () => {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error('useSearchTextContext must be used within a SearchTextContextProvider');
  }
  return context;
};
