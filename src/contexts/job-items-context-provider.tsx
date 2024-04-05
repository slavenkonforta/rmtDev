import { useSearchQuery } from '@/hooks/use-search-query';
import { useSearchTextContext } from '@/hooks/use-search-text-context';
import { RESULTS_PER_PAGE } from '@/lib/constants';
import { JobItem, PageDirection, SortBy } from '@/lib/types';
import { createContext, useState } from 'react';

type JobItemsContextProviderProps = {
  children: React.ReactNode;
};

type JobItemsContext = {
  jobItems?: JobItem[];
  isLoading: boolean;
  jobItemsSortedAndSliced: JobItem[];
  totalNumberOfResults: number;
  totalNumberOfPages: number;
  sortBy: SortBy;
  currentPage: number;
  handleSortByChange: (newSortBy: SortBy) => void;
  handlePageChange: (direction: PageDirection) => void;
};

export const JobItemsContext = createContext<JobItemsContext | null>(null);

export default function JobItemsContextProvider({ children }: JobItemsContextProviderProps) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');
  const [currentPage, setCurrentPage] = useState(1);

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = Math.ceil(totalNumberOfResults / RESULTS_PER_PAGE);

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === 'recent') {
      return a.daysAgo - b.daysAgo;
    } else {
      return b.relevanceScore - a.relevanceScore;
    }
  });

  const jobItemsSortedAndSliced = jobItemsSorted.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handleSortByChange = (newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };

  const handlePageChange = (direction: PageDirection) => {
    if (direction === 'next' && currentPage < totalNumberOfPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'previous' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSortedAndSliced,
        totalNumberOfResults,
        totalNumberOfPages,
        isLoading,
        sortBy,
        currentPage,
        handleSortByChange,
        handlePageChange,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
