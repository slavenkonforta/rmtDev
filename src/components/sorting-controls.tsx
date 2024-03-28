import { ArrowDownWideNarrow } from 'lucide-react';
import { Button } from './ui/button';
import { useJobItemsContext } from '@/hooks/use-job-items-context';

export default function SortingControls() {
  const { handleSortByChange } = useJobItemsContext();

  return (
    <section className='flex items-center gap-2'>
      <ArrowDownWideNarrow size={'14px'} />

      <Button onClick={() => handleSortByChange('relevant')} size='sm' variant='outline'>
        Relevant
      </Button>
      <Button onClick={() => handleSortByChange('recent')} size='sm' variant='outline'>
        Recent
      </Button>
    </section>
  );
}
