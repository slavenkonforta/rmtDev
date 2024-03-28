import { useQuery } from '@tanstack/react-query';
import { BASE_API_URL } from '@/lib/constants';
import { JobItemsApiResponse } from '@/lib/types';

export const useSearchQuery = (searchText: string) => {
  const getJobItems = async () => {
    const response = await fetch(`${BASE_API_URL}?search=${searchText}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: JobItemsApiResponse = await response.json();
    return data.jobItems;
  };

  const {
    isLoading,
    isError,
    data: jobItems,
    error,
  } = useQuery({
    queryKey: ['job-items', searchText],
    queryFn: getJobItems,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!searchText,
    meta: {
      errorMessage: 'Failed to fetch job items.',
    },
  });

  return { isLoading, isError, jobItems, error };
};
