import React, {Component} from 'react';
import axios from 'axios'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import {SpotifyProvider} from "./contexts/SpotifyContext";
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return (
        <SpotifyProvider>
          <div className="App">
            {/*<button onClick={() => this.spotifyAuth()}>Sign in</button>*/}
            <div className="header">
              <SignIn></SignIn>
            </div>
          </div>
        </SpotifyProvider>
    );
  }


}

export default App;
