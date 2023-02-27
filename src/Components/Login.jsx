import React from 'react'

import styled from 'styled-components'

export default function Login() {
  const handleClick = () => {
    const cliendId = '62e3f84f9fa141d1ac886f90cca1aa0d'
    const redirectUrl = 'http://localhost:3000/'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ]
    window.location.href = `${apiUrl}?client_id=${cliendId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Spotify Logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 80px;
  img {
    height: 20vh;
  }
  button {
    padding: 24px 80px;
    border-radius: 80px;
    border: none;
    background-color: #000;
    color: #49f585;
    font-size: 36px;
    cursor: pointer;
  }
`
