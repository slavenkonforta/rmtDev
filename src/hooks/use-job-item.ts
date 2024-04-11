import { useQuery } from '@tanstack/react-query';
import { BASE_API_URL } from '@/lib/constants';
import { JobItemApiResponse } from '@/lib/types';

const fetchJobItem = async (id: number | null): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

export const useJobItem = (id: number | null) => {
  const { data, isLoading } = useQuery({
    queryKey: ['job-item', id],
    queryFn: () => fetchJobItem(id),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!id,
    meta: {
      errorMessage: 'Failed to fetch job item.',
    },
  });

  return { jobItem: data?.jobItem, isLoading } as const;
};
