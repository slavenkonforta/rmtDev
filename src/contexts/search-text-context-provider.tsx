import { useDebounce } from '@/hooks/use-debounce';
import { createContext, useState } from 'react';

type SearchTextContextProviderProps = {
  children: React.ReactNode;
};

type SearchTextContext = {
  searchText: string;
  debouncedSearchText: string;
  handleSearchTextChange: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

export default function SearchTextContextProvider({ children }: SearchTextContextProviderProps) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 1000);

  const handleSearchTextChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchTextContext.Provider value={{ searchText, debouncedSearchText, handleSearchTextChange }}>
      {children}
    </SearchTextContext.Provider>
  );
}
