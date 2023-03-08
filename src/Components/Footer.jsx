import styled from 'styled-components'
import React from 'react'

import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
import VolumeController from './VolumeController'

function Footer() {
  return (
    <Container>
      <CurrentTrack/>
      <PlayerControls />
      <VolumeController />
    </Container>
  )
}

const Container = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center; 
  padding: 0 16px;
`

export default Footer