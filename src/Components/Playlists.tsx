import React from 'react';
import axios from 'axios';

import { useStateProvider } from '../utils/StateProvider';

import reducerCases from '../utils/Constants';

const Playlists: React.FC = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  React.useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <div className="playlists">
      <ul>
        {playlists.map(({ name, id }) => (
          <li key={id} onClick={() => changeCurrentPlaylist(id)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
