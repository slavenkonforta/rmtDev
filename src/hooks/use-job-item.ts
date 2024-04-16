import { useQuery } from '@tanstack/react-query';
import { fetchJobItem } from '@/lib/utils';

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
