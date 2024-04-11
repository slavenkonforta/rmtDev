import Header, { HeaderTop } from './header';
import Layout from './layout';
import Content from './content';
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

function App() {
  return (
    <Layout>
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>

      <Content>
        <Sidebar>
          <SidebarTop>
            <ResultCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
