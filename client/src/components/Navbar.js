import React from 'react';
import {Link} from 'react-router-dom'
import home from '../images/home.svg'
import agenda from '../images/agenda.svg'

function Navbar(props) {
    return (
        <nav className='navbar'>
            <Link to='/'><img className='home-btn' src={home} alt='home button'/></Link>
            <Link to='/agenda'><img className='agenda-btn' src={agenda} alt='agenda button'/></Link>
        </nav>
    );
}

export default Navbar;