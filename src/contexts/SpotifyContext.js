import React, {Component} from 'react';
import axios from "axios";

const SpotifyContext = React.createContext();

class SpotifyProvider extends Component {
  state = {
    loggedIn: false,
    accessToken: null,
    user: null
  };

  render() {
    return (
        <SpotifyContext.Provider value={{
          state: this.state,
          performAuth: this.spotifyAuth,
          setUser: this.setUser,
          setAccessToken: (token) => this.setAccessToken(token)
        }}>
          {this.props.children}
        </SpotifyContext.Provider>
    )
  }

  setUser() {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + this.state.accessToken
      }
    }).then(res => {
      const {data: user} = res;
      this.setState({user});

    })
  }

  setAccessToken(token){
    console.log("setting token");
    this.setState({
      accessToken: token,
      loggedIn: true},
        () =>  {this.setUser()
    });
  }

  spotifyAuth() {
    axios.get('http://localhost:8888/login')
        .then(res => window.location = res.data)
        .catch(err => console.log(err))
  }
}

export {SpotifyContext, SpotifyProvider}
