import React from 'react';
import styled from 'styled-components';
import {SpotifyContext} from '../contexts/SpotifyContext'

const SignIn = (props) => {
  return (
      <div className="sign-in">
        <SpotifyContext.Consumer>
          {
            (context) => (
                <SignInButton onClick={context.performAuth}>Sign In</SignInButton>
            )
          }
        </SpotifyContext.Consumer>
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
