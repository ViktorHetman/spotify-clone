import styled from 'styled-components';
import axios from 'axios';
import { BsVolumeUp } from 'react-icons/bs';

import React from 'react';
import { useStateProvider } from '../utils/StateProvider';

function VolumeController() {
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
    <Container>
      <BsVolumeUp />
      <input
        type="range"
        min={0}
        max={100}
        onMouseUp={(e) => {
          setVolume(e);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  color: white;
  align-content: center;
  input {
    width: 240px;
    border-radius: 32px;
    heigth: 8px;
  }
`;

export default VolumeController;
