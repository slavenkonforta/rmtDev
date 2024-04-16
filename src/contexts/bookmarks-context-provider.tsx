import { useJobItems } from '@/hooks/use-job-items';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { JobItemExtended } from '@/lib/types';
import { createContext } from 'react';

type BookmarksContextProviderProps = {
  children: React.ReactNode;
};

type BookmarksContext = {
  bookmarkedIds: number[];
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
  bookmarkedJobItems: JobItemExtended[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({ children }: BookmarksContextProviderProps) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>('bookmarkedIds', []);
  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(bookmarkedIds);

  const isBookmarked = (id: number) => bookmarkedIds.includes(id);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkedIds, toggleBookmark, isBookmarked, bookmarkedJobItems, isLoading }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
