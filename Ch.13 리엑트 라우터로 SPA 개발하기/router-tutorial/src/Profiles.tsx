import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <div>User List</div>
            <ul>
                <li>
                    {/* <Link to="profile/velopert">Velopert</Link> */}
                    <NavLink to='profile/velopert' style={({isActive}) => {
                        return {
                            background: (isActive) ? 'black' : '',
                            color: (isActive) ? 'white' : ''
                        }
                    }}>Jon</NavLink>
                </li>
                <li>
                    <Link to="profile/gildong">Gildong</Link>
                </li>
            </ul>

            <Routes>
                <Route path="*" element={<div>Select User</div>} />
                <Route path="profile/:username" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default Profiles;