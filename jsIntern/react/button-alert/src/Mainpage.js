import React from "react";

const Mainpage = (props) => {
    console.log(props);
    return(
        <div>
            <div className="imageBlock">
                {props.firstComp}
            </div>
            <div className="buttonBlock">
                {props.secondComp}
            </div>
        </div>
    );
}

export default Mainpage;