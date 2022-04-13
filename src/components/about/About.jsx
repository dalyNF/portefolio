import React from 'react';
import classes from "../../app.module.css";

function About() {
    return (
        <section id="aboutMe" className={classes.aboutMe}>
            {/* <h2 className={classes.english}>About me</h2> */}
            <h2 className={classes.french}>A propos </h2>
            <div className={classes.underline}></div>
                <div className={classes.pictAbout}>
                    <img src="img/img04.jpg" ></img>
                </div>
            <article>
                {/* <p className={classes.english}>
        I'm Daly i freshly decide to give a new bump to my carreer. The developpment appears to be a sumup of differents passion i had. I like artisanat and crafting, so finding a way to e-craft project depending of my imagination, or to put my skill to serve community project is very important to me .
                </p> */}
                <p className={classes.french}>
                Bonjour, je suis Daly N'guessan développeur web junior.
<br></br>
<br></br>
J'ai suivi un parcours en tant que  musicien/compositeur, professeur de guitare, puis sound designer, ce qui m'a permis de m'épanouir et de développer ma sensibilité artistique, et ma pédagogie.
<br></br>
<br></br>
Par la suite, j'ai pris la route du commerce, façonné mes compétences professionnelles et humaines comme: mon savoir être, ma rigueur, ma capacité à résoudre les problèmes et à travailler en équipe. <br>
</br>
Durant cette période, j'ai vécu à l'étranger pour différents emplois. Vivre dans des pays anglophones m'ont beaucoup aidé, j'ai pu y perfectionner mon anglais, ainsi que mes outils de communication.
<br></br>
<br></br>

Aujourd'hui, le développement web me permet de continuer à trouver des solutions en équipe, comme il me plaisait de faire dans le commerce. Tout en renouant davantage avec l'épanouissement créatif que je trouvais dans la musique.

                </p>
            </article>
            {/* <article>
        My goal ?
            </article> */}
            {/* <i class="fas fa-spinner fa-5x fa-pulse"></i>
            <i class="fab fa-pagelines fa-5x fa-pulse"></i>
            <i class="fas fa-globe fa-5x fa-spin"></i>
            <i class="fas fa-globe fa-5x fa-pulse"></i> */}
            
        </section>
    )
}

export default About




