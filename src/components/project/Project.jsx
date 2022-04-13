import React from 'react';
import classes from "../../app.module.css";
import { Link } from 'react-router-dom';


function Project() {
    return (
        <section id="project" className={classes.project}>

            <div className={classes.projectTitle}>
                <article>
                    <h2>Projets Web</h2>
                    <div className={classes.underline}></div>
                    {/* <p>Here a quick view of the project i've worked on</p> */}
                    {/* <p>Aperçu des projets en cours</p> */}
                </article>
                
                <section className={classes.projectSection}> 

                    <article className={classes.projectArticle}>
                        <a href="https://lean-friend.surge.sh" target="blank">
                            <img src="/img/chop1.png" alt="site la chopine" />
                            <div className={classes.projectInfo}>
                                <p>Projet de fin de formation 3wa. En construction.</p>
                            </div>
                        </a>
                    </article>

                    <article className={classes.projectArticle}>
                        <a href="">
                            <img src="/img/portefolio.png" alt="site portefolio daly nguessan"/>
                            <div className={classes.projectInfo}>
                            <p>Site sur lequel vous êtes actuellement.</p>
                            </div>
                        </a>
                    </article>

                </section>
            </div>

        </section>
    )
}

export default Project
