import React, {useEffect, useState} from 'react';
import axios from "axios";

const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const performAuth = () => {
    axios.get('http://localhost:8888/login')
        .then(res => {
          window.location = res.data
        })
        .catch(err => console.log(err))
  };

  const logUserIn = (token) =>{
    setAccessToken(token);
  };

  useEffect(() => {
    if(accessToken){
      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }).then(res => {
        const {data: user} = res;
        setUserDetails(user);
        setLoggedIn(true)
      })
    }
  }, [accessToken]);

  return (
      <SpotifyContext.Provider value={{
        loggedIn: loggedIn,
        accessToken: accessToken,
        userDetails: userDetails,
        performAuth,
        logUserIn: (token) => logUserIn(token)
      }}>
        {props.children}
      </SpotifyContext.Provider>
  )
};

export {SpotifyContext, SpotifyProvider}
