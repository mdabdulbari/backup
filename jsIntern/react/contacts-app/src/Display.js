import React from "react";

const Display = (props) => {
    return(
        <div>
            <div className="firstBlock">
                <h2>Contacts</h2>
                {props.firstComp}
            </div>
            <div className="secondBlock">
                <h2>Chat</h2>
                {props.secondComp}
            </div>
        </div>
    );
}

export default Display;