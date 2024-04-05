import { useActiveIdContext } from '@/hooks/use-active-id-context';

export default function JobItemContent() {
  const { activeId } = useActiveIdContext();
  return <section className='w-2/3 border-l p-2'>{activeId}</section>;
}
