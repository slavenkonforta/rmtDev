import { Card } from './card';

export default function Content({ children }: { children: React.ReactNode }) {
  return <Card className='flex h-2/3'>{children}</Card>;
}
