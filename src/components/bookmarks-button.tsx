import { TriangleDownIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export default function BookmarksButton() {
  return (
    <section className='border-l'>
      <Button variant={'ghost'} className='flex items-center gap-1'>
        Bookmarks <TriangleDownIcon />
      </Button>

      {/* {isOpen && <BookmarksPopover ref={popoverRef} />} */}
    </section>
  );
}
