import { JobItem } from '@/lib/types';
import JobListItem from './job-list-item';
import Spinner from './ui/spinner';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  return (
    <ul className='h-full'>
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem key={jobItem.id} jobItem={jobItem} isActive={false} />
        ))}
    </ul>
  );
}
