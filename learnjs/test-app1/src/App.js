import React, { Component } from 'react';
import './App.css';
import MyProvider from "./context";
import testContext from "./testContext";
import Home from './Home';



class App extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      logged_in: false
    }
  }
  
  render() {
    return (
      <MyProvider>
      <div className="App">
        <testContext.Consumer>
          {(context) => (
            <Home />
          )}
        </testContext.Consumer>
      </div>
      </MyProvider>
    );
  }
}

export default App;

