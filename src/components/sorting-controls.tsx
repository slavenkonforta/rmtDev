import { ArrowDownWideNarrow } from 'lucide-react';
import { Button } from './ui/button';
import { useJobItemsContext } from '@/hooks/use-job-items-context';

export default function SortingControls() {
  const { sortBy, handleSortByChange } = useJobItemsContext();

  return (
    <section className='flex items-center gap-2'>
      <ArrowDownWideNarrow size={'14px'} />

      <SortingButton
        onClick={() => handleSortByChange('relevant')}
        isActive={sortBy === 'relevant'}
      >
        Relevant
      </SortingButton>
      <SortingButton onClick={() => handleSortByChange('recent')} isActive={sortBy === 'recent'}>
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <Button onClick={onClick} size='sm' variant={isActive ? 'secondary' : 'outline'}>
      {children}
    </Button>
  );
}
