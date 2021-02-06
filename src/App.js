import logo from './logo.svg';
// import './App.css';
import Navigation from './navigation/navigation';
import { ThemeProvider, StyleReset } from 'atomize';

function App() {
  return (
    <>
      <StyleReset />
      <Navigation authenticated="False" />
    </>
  );
}
export default App;
