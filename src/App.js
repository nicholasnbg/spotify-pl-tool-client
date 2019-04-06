import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <button onClick={() => this.spotifyAuth()}>Sign in</button>
          </div>
        </Router>
    );
  }

  spotifyAuth() {
    axios.get('http://localhost:8888/login')
        .then(res => window.location = res.data)
        .catch(err => console.log(err))
  }
}

export default App;
