import React from 'react';
import classes from "../../app.module.css";
import {Link} from "react-router-dom";

function Cv() {
    return (
        <section id='Cv' className={classes.cvSection}>

            <figure className={classes.cvPict}>
            <img src="/img/cv.png" alt="cv Daly N'guessan"/>
            </figure>

            <div >
            <button className={classes.downloadBtn}><Link to="./img/cv.pdf" target="blank" download>Téléchargez le cv</Link></button>
            </div>
            
        </section>
    )
}

export default Cv
