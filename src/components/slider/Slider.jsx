import React, {useState} from 'react'
import classes from "../project/project.module.css"

function Slider() {
    
    let [index, setIndex] = useState(0);
    
    let project = 
        [
            {src : "/img/portefolio.png",
            alt:"porteFolio Daly N'guessan",
            fig:"Site sur lequel vous êtes actuellement",
            link:"http://localhost:3000/#aboutMe"
            },
            {src:"/img/portefolio.png",
            alt:"projet2",
            fig:"Site du projet 2",
            link:"#"
            },
            {src:"/img/portefolio.png",
            alt:"projet3",
            fig:"Site du projet 3",
            link:"#"
            },
        ] 
        console.log(index);
        function next () {
           
            if (index > project.length -2 ){
                setIndex (index= 0);
            }
            else {
                setIndex(index +1) ;
            }           
        }
        function previous () {
            
            if (index <= 0){
                setIndex(index = project.length -1 ) ;
            }
            else {
                setIndex(index -1);
            }            
        }
       
    
    
    //  console.log(project[1].src)
    
    return (
        <section className={classes.slider}>
            
            <figure className={classes.figure}>
                <img className={classes.sliderImg} src={project[index].src} alt={project[index].alt}></img>
                <figcaption>{project[index].fig}</figcaption>
            </figure>
        {/* <a href={project[index].link}></a> */}

        <div>
        <button onClick={previous} className={classes.arrowLeft}><i className="fas fa-hand-point-left"></i></button>
        <button  onClick={next} className={classes.arrowRight}><i className="far fa-hand-point-right"></i></button>
        </div>

        </section>
    )
}

export default Slider
