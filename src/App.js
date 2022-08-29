import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Calls from './pages/calls/Calls'
import Deals from './pages/deals/Deals';
import Team from './pages/team/Team';
import Activity from './pages/activity/Activity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calls' element={<Calls/>} />
        <Route path='/deals' element={<Deals/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/activity' element={<Activity/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
