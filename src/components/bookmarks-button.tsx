import { TriangleDownIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import BookmarksPopover from './bookmarks-popover';
import { useReducer } from 'react';

export default function BookmarksButton() {
  const [isOpen, toggleIsOpen] = useReducer((state) => !state, false);

  return (
    <section className='border-l'>
      <Button onClick={toggleIsOpen} variant={'ghost'} className='flex items-center gap-1'>
        Bookmarks <TriangleDownIcon />
      </Button>

      {isOpen && <BookmarksPopover />}
    </section>
  );
}
