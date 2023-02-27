import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'

import axios from 'axios'
import reducerCases from '../utils/Constants'
import styled from 'styled-components'

function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider()
  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      )
      const { items } = response.data
      const playlists = items.map(({name, id}) => {
        return { name, id }
      })
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
    }
    getPlaylist()
  }, [token, dispatch])
  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => (
           <li key={id}>{name}</li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
height: 100%;
overflow: hidden;
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  height: 55vh;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0 11px;
    &-thumb {
      background-color: rgba(255, 255, 255 , 0.6)
    }
  }
  li {
    display: flex;
    gap: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      color: white;
    }
  }
}
`

export default Playlists
