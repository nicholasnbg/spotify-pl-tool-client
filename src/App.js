import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import {SpotifyProvider} from "./contexts/SpotifyContext";
import {PatternBuilderProvider} from "./contexts/PatternBuilderContext";

class App extends Component {
  render() {
    return (
        <Router>
          <SpotifyProvider>
            <PatternBuilderProvider>
              <Route path="/" component={Dashboard}/>
            </PatternBuilderProvider>
          </SpotifyProvider>
        </Router>
    );
  }


}

export default App;
