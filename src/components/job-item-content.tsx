import { useActiveIdContext } from '@/hooks/use-active-id-context';
import { useJobItem } from '@/hooks/use-job-item';
import Spinner from './ui/spinner';
import BookmarkIcon from './bookmark-icon';
import { Badge } from './ui/badge';

export default function JobItemContent() {
  const { activeId } = useActiveIdContext();
  const { jobItem, isLoading } = useJobItem(activeId);

  return (
    <section className='flex w-2/3 items-center justify-center border-l'>
      {isLoading && <Spinner />}
      {!isLoading && !jobItem && <EmptyJobContent />}
      {!isLoading && jobItem && (
        <div className='relative text-primary/70'>
          <img
            src={jobItem.coverImgURL}
            alt='#'
            className='z-0 h-[174px] w-full rounded-tr-lg object-cover'
          />

          <a
            className='absolute right-2 top-2 rounded-lg bg-blue-500 px-2 py-0.5 text-white'
            href={jobItem.companyURL}
            target='_blank'
          >
            Apply
          </a>

          <section className='relative -top-14 flex justify-between gap-5 px-10'>
            <div className='space-y-2'>
              <div className='rounded-lg bg-yellow-600 px-5 py-6 font-bold text-gray-900'>
                {jobItem.badgeLetters}
              </div>
              <div className='flex justify-between'>
                <time className='text-sm'>{jobItem.daysAgo}d</time>

                <BookmarkIcon id={jobItem.id} />
              </div>
            </div>

            <div className='flex flex-col'>
              <h2 className='text-xl text-white'>{jobItem.title}</h2>
              <p className='text-sm italic text-white'>{jobItem.company}</p>
              <p className='my-3'>{jobItem.description}</p>
              <div className='flex gap-x-9 text-xs'>
                <p className='flex items-center gap-2'>
                  <i className='fa-solid fa-clock flex'></i>
                  {jobItem.duration}
                </p>
                <p className='flex items-center gap-2'>
                  <i className='fa-solid fa-money-bill'></i>
                  {jobItem.salary}
                </p>
                <p className='flex items-center gap-2'>
                  <i className='fa-solid fa-location-dot'></i> {jobItem.location}
                </p>
              </div>
            </div>
          </section>

          <div className='px-10'>
            <section className='mb-8 flex'>
              <div className='mr-9'>
                <h4 className='font-semibold capitalize'>Qualifications</h4>
                <p className='mt-1 w-[157px] text-xs'>Other qualifications may apply</p>
              </div>
              <ul className='flex flex-wrap items-start gap-[6px]'>
                {jobItem.qualifications.map((qualification) => (
                  <li key={qualification}>
                    <Badge variant='secondary'>{qualification}</Badge>
                  </li>
                ))}
              </ul>
            </section>

            <section className='flex'>
              <div className='mr-9'>
                <h4 className='font-semibold capitalize'>Company reviews</h4>
                <p className='mt-1 w-[157px] text-xs'>Recent things people are saying</p>
              </div>
              <ul className='grid flex-1 auto-rows-auto grid-cols-2 gap-5'>
                {jobItem.reviews.map((review) => (
                  <li key={review} className='reviews__item text-gray-400'>
                    {review}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <footer className='mx-9 mt-8 border-t-[1px] pt-3'>
            <p className='text-[10px]'>
              If possible, please reference that you found the job on{' '}
              <span className='font-bold'>rmtDev</span>, we would really appreciate it!
            </p>
          </footer>
        </div>
      )}
    </section>
  );
}

function EmptyJobContent() {
  return (
    <div className='space-y-3 p-2 text-center text-primary/70 sm:p-16 md:p-28'>
      <p className='text-2xl font-bold'>What are you looking for?</p>
      <p>Start by searching for any technology your ideal job is working with</p>
    </div>
  );
}
