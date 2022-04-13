import Header from './components/header/Header';
import Home from "./Home"
import Footer from './components/footer/Footer';

import Mentions from "./components/confidentialité/Mentions"
import Confidentialte from "./components/confidentialité/Confidentialite"

//css
import classes from "./app.module.css"

//routing 
import {Routes, Route} from "react-router-dom";



function App() {
 
  return (
    <>
    <div className={classes.app}>
  

    <Header/>

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mentions" element={<Mentions />} />
    <Route exact path="/confident" element={<Confidentialte />} />
    </Routes>

    <Footer/>
     
    </div>
    </>
  )
}

export default App;
