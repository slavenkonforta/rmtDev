import { BookmarkFilledIcon } from '@radix-ui/react-icons';

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  return (
    <button className=''>
      <BookmarkFilledIcon />
    </button>
  );
}
