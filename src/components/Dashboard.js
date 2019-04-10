import React, {Component, useContext, useState, useEffect, useLayoutEffect} from "react";
import qs from 'query-string'
import styled from 'styled-components';
import {SpotifyContext, SpotifyProvider} from "../contexts/SpotifyContext";
import SignIn from "./SignIn";
import UserInfo from "./UserInfo";
import VideoDetails from "./VideoDetails";

const Dashboard = (props) => {
  let context = useContext(SpotifyContext);

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect( ()=>{
    let contextToken = context.state.accessToken;
    let paramsToken = qs.parse(props.location.search).access_token;
    if(contextToken){
      setLoggedIn(true)
    } else if(paramsToken){
      setLoggedIn(true);
      context.setAccessToken(paramsToken);
    }
  },[]);

  const user = context.state.user;
  return(
      <div className="App">
        <Header>
          <div className="header">
            {loggedIn ? <UserInfo name={user && user.display_name} displayPicUrl={user && user.images[0].url} /> : <SignIn/>}
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
`
