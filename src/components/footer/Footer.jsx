import React from 'react';

import classes from "../../app.module.css"

import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
        <section className={classes.social}>
            <p>Pour me contacter:</p>
            <p><i class="fa-solid fa-phone"></i> 06-21-89-64-52</p>
            <p> <i className="far fa-envelope"></i> daly.nguessan.fouche@gmail.com</p>
            <h5>  <a href="https://www.linkedin.com/in/daly-n-guessan-24a51819/" target="blank"><i className="fab fa-linkedin"></i></a></h5>
        </section>
        <footer id='footer' className={classes.footer}>
            
            <article>
                <p>@Copyright 2022 - Daly NGUESSAN. Tous droit réservés</p>
                <Link to="/">Home</Link>
                <Link to="/mentions">Mentions légales</Link>
                <Link to="/confident">Politique de confidentialité</Link>
            </article>
        </footer>
        </>
    )
}

export default Footer
