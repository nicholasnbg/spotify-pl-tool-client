import React, {Component} from 'react';
import axios from "axios";

const SpotifyContext = React.createContext();

class SpotifyProvider extends Component {
  state = {
    something: "testing"
  };

  render() {
    return (
        <SpotifyContext.Provider value={{
          state: this.state,
          performAuth: this.spotifyAuth
        }}>
          {this.props.children}
        </SpotifyContext.Provider>
    )
  }

  spotifyAuth() {
    axios.get('http://localhost:8888/login')
        .then(res => window.location = res.data)
        .catch(err => console.log(err))
  }
}

export {SpotifyContext, SpotifyProvider}
