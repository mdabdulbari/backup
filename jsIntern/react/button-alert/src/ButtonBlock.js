import React from "react";

const ButtonBlock = (props) => {
    return(
        <div>
            <button id="button" onClick={props.buttonOnClick}>Click me!</button>
        </div>
    );
}

export default ButtonBlock;