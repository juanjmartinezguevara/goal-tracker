import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
        </nav>
    );
}

export default Navbar;