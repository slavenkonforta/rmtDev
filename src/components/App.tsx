import Header from './header';
import Layout from './layout';
import { ThemeProvider } from './theme-provider';
import Content from './ui/content';
import Footer from './ui/footer';

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
