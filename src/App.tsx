import React from 'react';

import Login from './Components/Login';
import Spotify from './Components/Spotify';

import reducerCases from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';

const App: React.FC = () => {
  const [{ token }, dispatch] = useStateProvider();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
