import { StylesProvider } from './StylesContext';
import './App.css';
import { Headline, Footer } from './atoms';
import { Header, Wrap } from './molecules';

function App() {
  return (
    <StylesProvider>
      <Header />
      <Headline />

      <Wrap />

      <Footer />
    </StylesProvider>
  );
}
export default App;
