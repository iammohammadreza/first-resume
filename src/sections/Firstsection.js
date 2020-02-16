import React, { Component } from 'react';
import Fullpage from "../components/Fullpage"
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import DownIcon from '../components/downIcon'
import * as Scroll from 'react-scroll';
import {Link, Element} from 'react-scroll'

class FirstSection extends Component {


  state = {
    color: 'white'
  }
  ChangeColor = () => {
    this.setState({
      color: this.state.color === 'white' ? 'black' : 'white'

    })
  }



  render() {

    return (
      <div>
        <Fullpage className="first" >
          <h1 className="title" style={{ color: this.state.color }}
            onMouseOver={() => { this.ChangeColor() }}
            onMouseOut={() => { this.ChangeColor() }}>
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-container">
            {
              Object.keys(data.links).map(key => {
                return (
                  <SocialIcon url={data.links[key]} />
                )
              })
            }
          </div>

        </Fullpage>
        <Link activeClass="active" to="about" spy={true} 
        smooth={true} offset={50} duration={500} 
        onSetActive={this.handleSetActive}>
        <DownIcon icon={data.icons.down}/>
        </Link>
        <Element name="about" className="element"/>
      </div>
    )
  }
}

export default FirstSection