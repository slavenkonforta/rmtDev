import { useQuery } from '@tanstack/react-query';
import { BASE_API_URL } from '@/lib/constants';
import { JobItemsApiResponse } from '@/lib/types';

const fetchJobItems = async (searchText: string): Promise<JobItemsApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

export const useSearchQuery = (searchText: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['job-items', searchText],
    queryFn: () => fetchJobItems(searchText),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!searchText,
    meta: {
      errorMessage: 'Failed to fetch job items.',
    },
  });

  return { jobItems: data?.jobItems, isLoading };
};
