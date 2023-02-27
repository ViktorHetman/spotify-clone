import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'

import axios from 'axios'
import reducerCases from '../utils/Constants'

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
    <>
      <ul>
        {playlists.map(({ name, id }) => (
           <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default Playlists
