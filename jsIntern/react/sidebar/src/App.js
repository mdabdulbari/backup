import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Message from './Message';
import Comment from './Comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar class="main-sidebar">
          <div>
            <h1>Messages</h1>
            <ul>
              <li><Message text="Message1"/></li>
              <li><Message text="Message2"/></li>
              <li><Message text="Message3"/></li>
            </ul>
            <Comment/>
          </div>
        </SideBar>
      </div>
    );
  }
}

export default App;
