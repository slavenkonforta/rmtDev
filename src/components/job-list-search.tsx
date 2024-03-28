import JobList from './job-list';

type JobListSearchProps = {
  searchText: string;
};

export default function JobListSearch({ searchText }: JobListSearchProps) {
  return (
    <section className='grow'>
      <JobList searchText={searchText} />
    </section>
  );
}
