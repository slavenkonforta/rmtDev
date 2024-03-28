import { useSearchQuery } from '@/hooks/use-search-query';
import { useSearchTextContext } from '@/hooks/use-search-text-context';
import { JobItem } from '@/lib/types';
import { createContext } from 'react';

type JobItemsContextProviderProps = {
  children: React.ReactNode;
};

type JobItemsContext = {
  jobItems?: JobItem[];
  isLoading: boolean;
  jobItemsSortedAndSliced: JobItem[];
  totalNumberOfResults: number;
};

export const JobItemsContext = createContext<JobItemsContext | null>(null);

export default function JobItemsContextProvider({ children }: JobItemsContextProviderProps) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);

  const totalNumberOfResults = jobItems?.length || 0;

  const jobItemsSortedAndSliced = jobItems?.slice(0, 7) || [];

  return (
    <JobItemsContext.Provider
      value={{ jobItems, jobItemsSortedAndSliced, totalNumberOfResults, isLoading }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
