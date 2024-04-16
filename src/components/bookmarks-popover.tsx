import { useBookmarksContext } from '@/hooks/use-bookmarks-context';
import JobList from './job-list';

export default function BookmarksPopover() {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();
  return (
    <div
      className=' fixed left-1/2 top-[105px] z-10 flex min-h-[76px] w-[340px] min-w-[340px] origin-left -translate-x-1/2 items-center
     justify-center overflow-hidden rounded-sm bg-secondary shadow-md dark:shadow-slate-800'
    >
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>
  );
}
