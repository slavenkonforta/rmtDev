import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchForm() {
  return (
    <div className='relative flex w-full items-center sm:w-3/4 lg:w-2/3'>
      <Search className='absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform' />
      <Input placeholder='Find remote developer jobs...' className='h-14 pl-10' />
    </div>
  );
}
