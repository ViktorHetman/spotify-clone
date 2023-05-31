import React from 'react';

const Login: React.FC = () => {
  const handleClick = () => {
    const cliendId = 'aad67db467e943a1b4b7560bb070e6e9';
    const redirectUrl = 'http://localhost:3000/';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ];
    window.location.href = `${apiUrl}?client_id=${cliendId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Spotify Logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  );
};

export default Login;
