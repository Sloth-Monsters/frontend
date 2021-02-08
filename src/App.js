import logo from './logo.svg';
import Landing from './pages/landing';
import { ThemeProvider, StyleReset } from 'atomize';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <StyleReset />
      <Landing authenticated={false} />
    </>
  );
}
export default App;
