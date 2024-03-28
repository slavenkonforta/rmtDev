import { JobItem } from '@/lib/types';
import BookmarkIcon from './bookmark-icon';

type JobListItemProps = {
  jobItem: JobItem;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  return (
    <li
      className={`${isActive ? 'bg-accent dark:bg-accent' : ''} group h-[80px] border-b last:border-b-0
       hover:bg-accent dark:hover:bg-accent`}
    >
      <a href={`#${jobItem.id}`} className='flex h-full items-center gap-2 p-4'>
        <div
          className='flex size-12 items-center justify-center rounded-md bg-gray-200 group-hover:bg-gray-50
         dark:bg-slate-900 dark:group-hover:bg-slate-950'
        >
          {jobItem.badgeLetters}
        </div>

        <div>
          <h3>{jobItem.title}</h3>
          <p className='text-sm italic'>{jobItem.company}</p>
        </div>

        <div className='ml-auto flex flex-col justify-between gap-3'>
          <BookmarkIcon id={jobItem.id} />
          <time>{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
