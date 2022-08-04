import React from "react";
import '../App.css'


const StopButton = ({onClick}) => {

    return(
        <>
            <input type="submit" value="Stop" onClick={onClick} className="buttons"/>
        </>  
    );
}

export default StopButton;