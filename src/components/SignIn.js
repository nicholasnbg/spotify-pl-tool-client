import React, {useContext} from 'react';
import styled from 'styled-components';
import {SpotifyContext} from '../contexts/SpotifyContext'

const SignIn = (props) => {
  const spotifyContext = useContext(SpotifyContext)
  return (
      <div className="sign-in">
        <SignInButton onClick={spotifyContext.performAuth}>Sign In</SignInButton>
      </div>
  );
};

export default SignIn;

const SignInButton = styled.button`
  padding: 10px 20px;
  color: white;
  background:blue;
  font-size: 1em;
  border-radius: 10px;
`
