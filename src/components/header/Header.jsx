import React from 'react';
// import ArrowDown from '../button/ArrowDown';
// import ArrowUp from '../button/ArrowUp';
// import NavBar from "./NavBar";
import classes from "../../app.module.css";
import {Link} from "react-router-dom";

function Header() {
   
    return (
        <header className={classes.header} id='header'>

                <nav id="nav"className={classes.navBar}>
                    <div className={classes.dropDown}>

                            <button className={classes.dropBtn} >
                            <i className="fas fa-bars"></i>
                            </button>

                        <div className={classes.dropdownContent}>
                            {/* <a href='#aboutMe'>About </a> */}
                            <a href='#aboutMe'>A propos </a>
                            {/* <a href='#projects'>Projects</a> */}
                            <a href='#projects'>Projets</a>
                            {/* <a href='#skills'>Skills</a> */}
                            <a href='#skills'>Compétences</a>
                            <a href='#Cv'>Cv</a>
                            <a href='#footer'>Contact</a>
                        </div>

                    </div>
                </nav>

            <article className={classes.title}>
            <Link to="/"><h1>Daly N'guessan</h1></Link>
            
            <h4>Developpeur Web</h4>
            

            </article>

            {/* <ArrowUp/>
            <ArrowDown/> */}
        </header>
    )
}

export default Header
