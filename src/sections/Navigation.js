import React, { Component } from 'react';
import Fullpage from "../components/Fullpage"
import data from '../data.json';
import * as Scroll from 'react-scroll';
import { Link, Element } from 'react-scroll'
import ThemeSwitcher from "react-theme-switcher";

class Navigation extends Component {

  
  
    render() {
        return (
            <div className="navigation">
                <div>
                <ThemeSwitcher
    cssSelector="body"
    switcherColor="#ffffff"
    darkColor="#FF5D5D"
    lightColor="#56CAB8"
    lightTextColor="#272b33"
    darkTextColor="#ffffff"
/>change theme
                 
                </div>
                <div>
                    <Link activeClass="active" to="home" spy={true}
                        smooth={true} offset={50} duration={500}
                        onSetActive={this.handleSetActive}>
                        <span style={{ marginRight: "15px" }}>Home</span>

                    </Link>
                    <Link activeClass="active" to="aboutsec" spy={true}
                        smooth={true} offset={50} duration={500}
                        onSetActive={this.handleSetActive}>
                        <span style={{ marginRight: "15px" }}>About</span>

                    </Link>
                    <Link activeClass="active" to="skillsec" spy={true}
                        smooth={true} offset={50} duration={500}
                        onSetActive={this.handleSetActive}> <span>Skills</span></Link>

                </div>
            </div>
        )
    }
}

export default Navigation