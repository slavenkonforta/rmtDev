import { useSearchQuery } from '@/hooks/use-search-query';
import { useSearchTextContext } from '@/hooks/use-search-text-context';
import { JobItem, SortBy } from '@/lib/types';
import { createContext, useState } from 'react';

type JobItemsContextProviderProps = {
  children: React.ReactNode;
};

type JobItemsContext = {
  jobItems?: JobItem[];
  isLoading: boolean;
  jobItemsSortedAndSliced: JobItem[];
  totalNumberOfResults: number;
  sortBy: SortBy;
  handleSortByChange: (newSortBy: SortBy) => void;
};

export const JobItemsContext = createContext<JobItemsContext | null>(null);

export default function JobItemsContextProvider({ children }: JobItemsContextProviderProps) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');

  const totalNumberOfResults = jobItems?.length || 0;

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === 'recent') {
      return a.daysAgo - b.daysAgo;
    } else {
      return b.relevanceScore - a.relevanceScore;
    }
  });

  const jobItemsSortedAndSliced = jobItemsSorted.slice(0, 7);

  const handleSortByChange = (newSortBy: SortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSortedAndSliced,
        totalNumberOfResults,
        sortBy,
        handleSortByChange,
        isLoading,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
