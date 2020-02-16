import React, { Component} from 'react';
import ThemeSwitcher from "react-theme-switcher";

class Fullpage extends Component {
    render(){
        const {children} = this.props
        return(
            <div className={`full-page ${this.props.className} || '' `}>
                
                {children}
            </div>
        )
    }
}

export default Fullpage