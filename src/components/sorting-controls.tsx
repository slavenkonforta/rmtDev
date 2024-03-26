import { ArrowDownWideNarrow } from 'lucide-react';
import { Button } from './ui/button';

export default function SortingControls() {
  return (
    <section className='flex items-center gap-2'>
      <ArrowDownWideNarrow size={'14px'} />

      <Button size='sm' variant='outline'>
        Relevant
      </Button>
      <Button size='sm' variant='outline'>
        Recent
      </Button>
    </section>
  );
}
