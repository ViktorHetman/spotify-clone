import React from 'react';
import axios from 'axios';

import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { useStateProvider } from '../utils/StateProvider';
import reducerCases from '../utils/Constants';

const Spotify: React.FC = () => {
  const [{ token }, dispatch] = useStateProvider();

  const bodyRef = React.useRef();
  const [navBackground, setNavBackground] = React.useState(false);
  const [headerBackground, setHeaderBackground] = React.useState(false);

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false);
    bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false);
  };

  React.useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className="spotify">
      <div className="spotify_body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="body_content">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Spotify;
