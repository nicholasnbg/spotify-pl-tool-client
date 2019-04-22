import React, {useContext, useState, useEffect} from "react";
import qs from 'query-string'
import styled from 'styled-components';
import {SpotifyContext} from "../contexts/SpotifyContext";
import SignIn from "./SignIn";
import UserInfo from "./UserInfo";
import VideoDetails from "./VideoDetails";

const Dashboard = (props) => {
  const spotifyContext = useContext(SpotifyContext);
  const user = spotifyContext.userDetails;

  useEffect( ()=>{
    const contextToken = spotifyContext.accessToken;
    const paramsToken = qs.parse(props.location.search).access_token;
    if(contextToken){
      console.log("already logged in")
    } else if(paramsToken){
      spotifyContext.logUserIn(paramsToken);
    }
  },[]);

  return(
      <div className="App">
        <Header>
          <div className="header">
            {spotifyContext.loggedIn ? <UserInfo name={user.display_name} displayPicUrl={user.images[0].url} /> : <SignIn/>}
          </div>
        </Header>
        <VideoDetails/>
      </div>
  )
};

export default Dashboard

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  height: 150px;
`;
