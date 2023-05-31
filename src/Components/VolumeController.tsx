import React from 'react';
import axios from 'axios';
import { BsVolumeUp } from 'react-icons/bs';

import { useStateProvider } from '../utils/StateProvider.jsx';

const VolumeController: React.FC = () => {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <div className="volume_contoller">
      <BsVolumeUp />
      <input
        type="range"
        min={0}
        max={100}
        onMouseUp={(e) => {
          setVolume(e);
        }}
      />
    </div>
  );
};

export default VolumeController;
