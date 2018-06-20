import React from "react";

const Mainpage = (props) => {
    return(
        <div>
            <div className="firstBlock">
                <h2>Contacts</h2>
                {props.firstComp}
            </div>
            <div className="buttonBlock">
                {props.secondComp}
            </div>
        </div>
    );
}

export default Mainpage;