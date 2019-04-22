import React, {useContext} from 'react';
import {SpotifyContext} from '../contexts/SpotifyContext'
import {Button as SignInButton} from '../styled/common'

const SignIn = (props) => {
  const spotifyContext = useContext(SpotifyContext);
  return (
      <div className="sign-in">
        <SignInButton onClick={spotifyContext.performAuth}>Sign In</SignInButton>
      </div>
  );
};

export default SignIn;


