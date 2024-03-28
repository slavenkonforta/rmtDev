import { Card } from './card';

export default function Content({ children }: { children: React.ReactNode }) {
  return <Card className='flex'>{children}</Card>;
}
