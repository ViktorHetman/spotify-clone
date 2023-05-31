import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

import { useStateProvider } from '../utils/StateProvider.jsx';
import reducerCases from '../utils/Constants.js';

const Navbar: React.FC = ({ navBackground }) => {
  const [{ userInfo, trackFilter }, dispatch] = useStateProvider();

  const filterTrackHandler = (value) => {
    const trackFilter = value;
    dispatch({ type: reducerCases.SET_FILTERED_TRACKS, trackFilter });
  };

  return (
    <div className="navbar">
      <div className="search_bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Artists, songs, or podcasts"
          onChange={(e) => filterTrackHandler(e.target.value)}
          value={trackFilter}
        />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
