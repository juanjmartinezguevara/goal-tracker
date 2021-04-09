import React from 'react';
import {Link} from 'react-router-dom'
import home from '../images/home.svg'

function Navbar(props) {
    return (
        <nav className='navbar'>
            <Link to='/'><img className='home-btn' src={home} alt='home logo'/></Link>
        </nav>
    );
}

export default Navbar;