import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import {SpotifyProvider} from "./contexts/SpotifyContext";

class App extends Component {
  render() {
    return (
        <Router>
          <SpotifyProvider>
          <Route path="/" component={Dashboard}/>
          </SpotifyProvider>
        </Router>
    );
  }


}

export default App;
