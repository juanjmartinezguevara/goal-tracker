import React from 'react';
import {Link} from 'react-router-dom'
import home from '../images/home.svg'
import agenda from '../images/agenda.svg'
import add from '../images/add.svg'

function Navbar(props) {
    return (
        <nav className='navbar'>
            <Link to='/'><img className='home-btn' src={home} alt='home button'/></Link>
            <Link to='/add-goal'><img className='add-goal-btn' src={add} alt='add new goal button'/></Link>
            <Link to='/agenda'><img className='agenda-btn' src={agenda} alt='agenda button'/></Link>
        </nav>
    );
}

export default Navbar;