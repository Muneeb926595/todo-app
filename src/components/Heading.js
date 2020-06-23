import React from 'react';
import '../App.css'
function Heading(props){
    return(
        <div className="heading">   
            <h2>{props.head}</h2>
        </div>
    )
}

export default Heading