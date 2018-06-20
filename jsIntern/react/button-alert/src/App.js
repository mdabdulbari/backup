import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainpage from './Mainpage';
import ImageBlock from './Imageblock';
import ButtonBlock from './ButtonBlock';

class App extends Component {
  constructor(){
    super();
    this.buttonOnclick = this.buttonOnClick.bind(this);
  }
  buttonOnClick(){
    alert("That's a cute bear");
  }
  render() {
    return (
      <div className="App">
        <Mainpage firstComp={<ImageBlock />} secondComp={<ButtonBlock buttonOnClick={this.buttonOnclick}/>}/>
      </div>
    );
  }
}

export default App;
