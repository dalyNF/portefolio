import React from 'react';
import classes from "../../app.module.css";

function Progress(props) {
    return (
        <>
        <label htmlFor="progress"></label>
        {/* <input defaultValue={props.value} className={classes.progress} type="range" min="0" max="100" /> */}
        <meter className={classes.progress} value
        ={props.value} className={classes.progress}  min="0" max="100"></meter>
        </>
            
        
    )
}

export default Progress
