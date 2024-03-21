import { ThemeProvider } from './theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div>Home</div>
    </ThemeProvider>
  );
}

export default App;
