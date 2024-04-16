import { useSearchQuery } from '@/hooks/use-search-query';
import { useSearchTextContext } from '@/hooks/use-search-text-context';
import { RESULTS_PER_PAGE } from '@/lib/constants';
import { JobItem, PageDirection, SortBy } from '@/lib/types';
import { createContext, useCallback, useMemo, useState } from 'react';

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

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === 'recent') {
          return a.daysAgo - b.daysAgo;
        } else {
          return b.relevanceScore - a.relevanceScore;
        }
      }),
    [jobItems, sortBy]
  );

  const jobItemsSortedAndSliced = useMemo(
    () =>
      jobItemsSorted.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ),
    [jobItemsSorted, currentPage]
  );

  const handleSortByChange = useCallback((newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  }, []);

  const handlePageChange = useCallback(
    (direction: PageDirection) => {
      if (direction === 'next' && currentPage < totalNumberOfPages) {
        setCurrentPage((prev) => prev + 1);
      } else if (direction === 'previous' && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    },
    [currentPage, totalNumberOfPages]
  );

  const contextValue = useMemo(
    () => ({
      jobItems,
      jobItemsSortedAndSliced,
      totalNumberOfResults,
      totalNumberOfPages,
      isLoading,
      sortBy,
      currentPage,
      handleSortByChange,
      handlePageChange,
    }),
    [
      jobItems,
      jobItemsSortedAndSliced,
      totalNumberOfResults,
      totalNumberOfPages,
      isLoading,
      sortBy,
      currentPage,
      handleSortByChange,
      handlePageChange,
    ]
  );

  return <JobItemsContext.Provider value={contextValue}>{children}</JobItemsContext.Provider>;
}
