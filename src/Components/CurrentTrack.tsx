import React from 'react';
import axios from 'axios';

import { useStateProvider } from '../utils/StateProvider.jsx';
import reducerCases from '../utils/Constants.js';

const CurrentTrack: React.FC = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  React.useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      if (response.data !== '') {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <>
      {currentlyPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentlyPlaying.image} alt="Currently playing track" />
          </div>
          <div className="track_info">
            <h4>{currentlyPlaying.name}</h4>
            <p>{currentlyPlaying.artists.join(', ')}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentTrack;
