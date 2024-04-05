import { useJobItemsContext } from '@/hooks/use-job-items-context';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from './ui/pagination';

export default function PaginationControls() {
  const { currentPage, totalNumberOfPages, handlePageChange } = useJobItemsContext();

  return (
    <section className='min-h-[58px] border-t px-1 py-2'>
      <Pagination className='m-0 justify-normal'>
        <PaginationContent className='w-full'>
          {currentPage > 1 && (
            <PaginationItem
              onClick={() => handlePageChange('previous')}
              className='mr-auto cursor-pointer'
            >
              <PaginationPrevious />
            </PaginationItem>
          )}
          {currentPage < totalNumberOfPages && (
            <PaginationItem
              onClick={() => handlePageChange('next')}
              className='ml-auto cursor-pointer'
            >
              <PaginationNext />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
}
