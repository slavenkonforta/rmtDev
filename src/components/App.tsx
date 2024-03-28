import Header, { HeaderTop } from './header';
import Layout from './layout';
import Content from './ui/content';
import Footer from './ui/footer';
import SearchForm from './search-form';
import Logo from './logo';
import BookmarksButton from './bookmarks-button';
import Sidebar, { SidebarTop } from './sidebar';
import ResultCount from './result-count';
import SortingControls from './sorting-controls';
import JobListSearch from './job-list-search';
import PaginationControls from './pagination-controls';
import JobItemContent from './job-item-content';
import { useState } from 'react';
import { useDebounce } from '@/hooks/use-debounce';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 1000);

  return (
    <Layout>
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Content>
        <Sidebar>
          <SidebarTop>
            <ResultCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch searchText={debouncedSearchText} />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
