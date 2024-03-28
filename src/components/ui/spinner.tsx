import { LoaderIcon } from 'lucide-react';

export default function Spinner() {
  return (
    <div className='flex h-full items-center justify-center'>
      <LoaderIcon className='size-12 animate-spin' />
    </div>
  );
}
