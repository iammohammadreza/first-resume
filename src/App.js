import React, { Component } from 'react';

import FirstSection from "./sections/Firstsection"
import AboutSection from './sections/Aboutsection';
import SkillSection from './sections/SkillSection';
import Navigation from './sections/Navigation';
import * as Scroll from 'react-scroll';
import { Link, Element } from 'react-scroll'
import SnowStorm from 'react-snowstorm';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <SnowStorm animationInterval="15" />
        <Element name="home" className="element" />
        <Navigation />
        <FirstSection />
        <Element name="aboutsec" className="element" />
        <AboutSection />
        <Element name="skillsec" className="element" />
        <SkillSection />
        
      </div>
    )

  }

}
export default App;
