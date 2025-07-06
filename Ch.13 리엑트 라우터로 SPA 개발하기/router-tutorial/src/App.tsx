import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">velopert</Link>
        </li> */}
      </ul>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/profile/:username" element={<Profile/>}/> */}
        <Route path="/profiles/*" element={<Profiles/>}/>
      </Routes>
    </div>
  );
};

export default App;