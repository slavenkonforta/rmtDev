import { JobItem } from '@/lib/types';
import JobListItem from './job-list-item';
import Spinner from './ui/spinner';
import { useActiveIdContext } from '@/hooks/use-active-id-context';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();
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
