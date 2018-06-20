import React from 'react';
import testContext from "./testContext";

class MyProvider extends React.Component{
  constructor(){
    super();
    this.state = {
      logged_in: true,
    }
  }
  render(){
    return(
      <testContext.Provider value = {{
          state: this.state,
          changeLoginState: () => this.setState({
              logged_in: "No"
            })
        }}>
        {this.props.children}
      </testContext.Provider>
    );
  }
}
 
export default MyProvider;