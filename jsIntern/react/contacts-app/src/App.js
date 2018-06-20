import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Contacts from './Contacts';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display firstComp={<Contacts />} secondComp={<Chat />}/>
      </div>
    );
  }
}

export default App;
