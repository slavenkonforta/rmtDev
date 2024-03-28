import { JobItem } from '@/lib/types';
import JobListItem from './job-list-item';
import Spinner from './ui/spinner';
import { useActiveId } from '@/hooks/use-active-id';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  const activeId = useActiveId();
  return (
    <ul className='h-full'>
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem key={jobItem.id} jobItem={jobItem} isActive={activeId === jobItem.id} />
        ))}
    </ul>
  );
}
