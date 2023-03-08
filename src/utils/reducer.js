import reducerCases from './Constants'

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: '',
  selectedPlaylist: null,
  currentlyPlaying: null,
  playerState: false,
  trackFilter: ''
}

const reducer = (state,action) => {
  switch(action.type) {
  case reducerCases.SET_TOKEN: {
    return {
      ...state, 
      token:action.token
    }
  }
  case reducerCases.SET_PLAYLISTS: {
    return {
      ...state,
        playlists: action.playlists 
      }
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo
      }
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist
      }
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying
      }
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState
      }
    }
    case reducerCases.SET_PLAYLIST_ID: {
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId
      }
    }
    case reducerCases.SET_FILTERED_TRACKS: {
      return {
        ...state,
        trackFilter: action.trackFilter
      }
    }
    default:
      return state
  }
}

export default reducer