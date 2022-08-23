import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Calls from './pages/calls/Calls'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calls' element={<Calls/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
