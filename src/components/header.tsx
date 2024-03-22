import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function Header() {
  return (
    <header>
      <div>Logo</div>
      <div>bookmarks</div>
      <div className='relative flex items-center'>
        <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform' />
        <Input placeholder='Your search...' className=' pl-8' />
      </div>
    </header>
  );
}
