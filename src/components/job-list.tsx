import { BASE_API_URL } from '@/lib/constants';
import { JobItemsApiResponse } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import JobListItem from './job-list-item';

type JobListProps = {
  searchText: string;
};

export default function JobList({ searchText }: JobListProps) {
  const getJobItems = async () => {
    const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
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

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log('listItems', jobItems);

  return <ul>{jobItems?.map((jobItem) => <JobListItem key={jobItem.id} jobItem={jobItem} isActive={false} />)}</ul>;
}
