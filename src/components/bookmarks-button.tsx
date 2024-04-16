import { useRef, useState } from 'react';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import BookmarksPopover from './bookmarks-popover';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

  return (
    <section className='border-l'>
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        variant={'ghost'}
        className='flex items-center gap-1'
      >
        Bookmarks <TriangleDownIcon />
      </Button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
