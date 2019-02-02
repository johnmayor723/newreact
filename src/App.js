import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header'
//import Body from './body'
import Main from './main'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
            <div className="onboarding">
        <Header/>
        <Main />
      </div>

         </Router>  
      </div>
    );
  }
}

export default App;
