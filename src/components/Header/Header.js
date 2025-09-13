
import React, { Component } from 'react';
import './header-style.css';


class Header extends Component {

    constructor(props){
        super(props)
    
    }

   
    render() {
        return(
            <header className='header-main'>
                <div className='logo'>
                    <img src="./img/music.png"  />
                </div>
                 <div className='title'>
                    <h1> {this.props.title} </h1>
                </div>
            </header>
           
        )
    }
}


export default Header
