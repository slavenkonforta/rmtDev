import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { useBookmarksContext } from '@/hooks/use-bookmarks-context';
import JobList from './job-list';

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return createPortal(
    <div
      ref={ref}
      className='fixed left-1/2 top-[105px] z-10 flex min-h-[76px] w-[340px] min-w-[340px] origin-left -translate-x-1/2 items-center justify-center overflow-hidden
     rounded-sm border bg-background shadow-lg transition-all dark:shadow-slate-900'
    >
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
