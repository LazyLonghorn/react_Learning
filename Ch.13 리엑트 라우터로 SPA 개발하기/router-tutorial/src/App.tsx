import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile/velopert">Velopert Profile</Link>
        </li>
      </ul>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </div>
  );
};

export default App;