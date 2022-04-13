import React from 'react';
import classes from "../../app.module.css";
import Progress from '../button/Progress';

function Skill() {
    return (
        <section id='skills' className={classes.skills}>
            {/* <h2 >Skills</h2> */}
            <h2>Compétences</h2>
            <div className={classes.underline}></div>
            <p>Cette évaluation de compétences est subjective et actuelle. Elle changera avec l'expérience.</p>
            <article>
                <h3>Front-end</h3>
                <ul>
                    <li>HTML </li> <Progress value="70"/>
                    <li>CSS</li> <Progress value="70"/>
                    <li>JAVASCRIPT</li> <Progress value="40"/>
                    <li>REACT</li> <Progress value="40"/>
                    <li>REACTNATIVE</li> <Progress value="20"/>
                </ul>
            </article>
            <article>
                <h3>Back-end</h3>
                <ul>
                    <li>NODEJS</li> <Progress value="40"/>
                    <li>POSTMAN</li> <Progress value="40"/>
                    <li>MYSQL</li> <Progress value="50"/>
                </ul>
            </article>
            <article>
                <h3>Others</h3>
                    <ul>
                    <li>GIT</li> <Progress value="50"/>
                    <li>HEROKU</li> <Progress value="50"/>
                    <li>MAC</li> <Progress value="70"/>
                    <li>WINDOWS</li> <Progress value="20"/>

                    </ul>

            </article>
        </section>
    )
}

export default Skill
