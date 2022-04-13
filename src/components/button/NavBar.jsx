import React from 'react';
import classes from "../../app.module.css";

function NavBar() {
    return (
        <nav className={classes.navBar}>
            <a href='#aboutMe'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#experiences'>Experiences</a>
            <a href='#footer'>Contact</a>
        </nav>
    )
}

export default NavBar
