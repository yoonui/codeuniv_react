import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/subscription" element={<Subscription />}/>
      </Routes>
    </div>
  );
}

export default App;
