import { useJobItemsContext } from '@/hooks/use-job-items-context';
import JobList from './job-list';

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  return (
    <section className='h-[560px]'>
      <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />
    </section>
  );
}
