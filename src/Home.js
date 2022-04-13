import React from 'react';
import About from './components/about/About';
import Project from './components/project/Project';
import Skill from "./components/skill/Skill"
import Cv from './components/Cv/Cv';

function Home() {
  return <>
    <About/>
    <Project/>
    <Skill/>
    <Cv/>
  </>;
}

export default Home;
