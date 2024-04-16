import { useBookmarksContext } from '@/hooks/use-bookmarks-context';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { isBookmarked, toggleBookmark } = useBookmarksContext();
  const isActive = isBookmarked(id);

  const handleToggleBookmark = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(id);
  };

  return (
    <button
      onClick={handleToggleBookmark}
      className={`${isActive ? 'text-blue-500' : 'text-gray-300 '} hover:text-blue-500`}
    >
      <BookmarkFilledIcon />
    </button>
  );
}
