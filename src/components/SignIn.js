import React from 'react';
import {SpotifyContext} from '../contexts/SpotifyContext'

const SignIn = (props) => {
  return (
      <div className="sign-in">
        <SpotifyContext.Consumer>
          {
            (context) => (
                <button className="sign-in__button" onClick={context.performAuth}>Sign In</button>
            )
          }
        </SpotifyContext.Consumer>
      </div>
  );
}

export default SignIn;
