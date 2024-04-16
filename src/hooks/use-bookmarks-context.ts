import { BookmarksContext } from '@/contexts/bookmarks-context-provider';
import { useContext } from 'react';

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarksContext must be used within a BookmarksContextProvider');
  }
  return context;
};
