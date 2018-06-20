import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      posts: []
    }
  }
  
  componentWillMount() {
    this.setState({loading: true});
    this.callApi()
      .then(content => {
        this.setState({ posts: content, loading: false });
        console.log(this.state.posts);
      });
  }

  async callApi() {
    const response = await fetch('http://localhost:8080/home');
    return await response.json();
  };

  render() {
    if(this.state.loading){
      return(
        <div className="div-loading">
          <Loading />
        </div>
      );
    }
    return (
      <div className="App">
        <p className="App-intro">{this.state.posts[0].title}</p>
        <p className="App-content">{this.state.posts[0].content}</p>
      </div>
    );
  }
}

export default App;
