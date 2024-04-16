import { useQueries } from '@tanstack/react-query';
import { fetchJobItem } from '@/lib/utils';
import { JobItemExtended } from '@/lib/types';

export const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['job-item', id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!id,
      meta: {
        errorMessage: 'Failed to fetch job item.',
      },
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((item): item is JobItemExtended => !!item);

  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading } as const;
};
