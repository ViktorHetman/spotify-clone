import React from 'react';

import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';
import VolumeController from './VolumeController';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <CurrentTrack />
      <PlayerControls />
      <VolumeController />
    </div>
  );
};

export default Footer;
