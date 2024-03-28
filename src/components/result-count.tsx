import { useJobItemsContext } from '@/hooks/use-job-items-context';

export default function ResultCount() {
  const { totalNumberOfResults } = useJobItemsContext();

  return (
    <p className='text-xs'>
      <span className='font-bold'>{totalNumberOfResults}</span> results
    </p>
  );
}
