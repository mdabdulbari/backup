import React from "react";

class Format extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: '',
        }

    }
    
    printResult(){
        const {inputText} = this.state
        return(
            <span>{inputText}</span>
        );
    }

    render(){
        return(
            <div>
                <div>
                    <span className="name">Name:</span><input className="input-field" />
                    <button className = "submit-button">Submit</button>
                    <br />
                    <div className="displayDiv"/>
                    <button className="redButton">Red</button>
                    <button className="greenButton">Green</button>
                    <button className="boldButton">BOLD</button>
                    <button className="italicButton">Italic</button>
                </div>
                <div className="fontSizeDiv">
                    Font Size: 
                        <button className="fontSizeButton"> + </button>
                        <button className="fontSizeButton"> - </button>
                </div>
            </div>
        );
    }
}

export default Format;