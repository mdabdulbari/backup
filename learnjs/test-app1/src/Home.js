import React from "react";
import testContext from "./testContext";
import MyProvider from "./context";

class Home extends React.Component{
    
    constructor(){
        super();
        this.state = {
            logged_in: false
        }
    }

    render(){
        return(
            <MyProvider>
            <div>
                <testContext.Consumer>
                {(context) => (
                        <React.Fragment>
                            <h2>Logged in? {context.state.logged_in}</h2>
                            <button onClick={context.state.changeLoginState}>Log out</button>
                        </React.Fragment>
                )}
                </testContext.Consumer>
            </div>
            </MyProvider>
        );
    }
}

export default Home;