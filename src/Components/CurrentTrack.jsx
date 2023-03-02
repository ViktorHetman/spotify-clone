import styled from 'styled-components'
import axios from 'axios'

import React, {useEffect} from 'react'

import { useStateProvider } from '../utils/StateProvider'
import reducerCases from '../utils/Constants'

function CurrentTrack() {
  const [{token, currentlyPlaying}, dispatch] = useStateProvider()

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      )
      if(response.data !== '') {
        const {item} = response.data
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      } 
    }
    getCurrentTrack()
  }, [token, dispatch])
  
  return (
    <Container>
      {
        currentlyPlaying && (
          <div className="track">
            <div className="track_image">
              <img src={currentlyPlaying.image} alt="Currently playing track" />
            </div>
            <div className="track_info">
              <h4>{currentlyPlaying.name}</h4>
              <p>{currentlyPlaying.artists.join(", ")}</p>
            </div>
          </div>
        )
      }
    </Container>
  )
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 16px;
    &_info {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      gap: 5px;
      h4{
        margin-bottom: 45px;
        color: white;
      }
      p {
        color: #b3b3b3;
        font-size: 12px;
        position: absolute;
        top: 35px;
      }
    }
  }
`

export default CurrentTrack