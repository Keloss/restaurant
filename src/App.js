import { BrowserRouter } from 'react-router-dom';
import './index.css'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>

      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
