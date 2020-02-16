import React, { Component } from 'react';
import Fullpage from "../components/Fullpage"
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import DownIcon from '../components/downIcon'
import * as Scroll from 'react-scroll';
import { Link, Element } from 'react-scroll'

class AboutSection extends Component {


    render() {

        return (
            <div>
                <Fullpage className="second">
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight:"bold"
                    }}>
                        {data.sections[0].items.map(p => {
                            return <p className="text-p">
                                {p.content}
                            </p>
                        }
                        )}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="Skills" spy={true}
                    smooth={true} offset={50} duration={500}
                    onSetActive={this.handleSetActive}>
                    <DownIcon icon={data.icons.down} />
                </Link>
                <Element name="Skills" className="element" />
            </div>

        )
    }
}

export default AboutSection