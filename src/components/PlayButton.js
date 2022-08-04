import React from "react";
import '../App.css'


const PlayButton = ({onClick}) => {

    return(
        <>
           <input type="submit" value="Play" onClick={onClick} className="buttons"/>
        </>  
    );



}

export default PlayButton;