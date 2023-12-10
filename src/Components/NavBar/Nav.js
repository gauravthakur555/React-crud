import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/" href="#home">Home</Link></li>
                <li><Link to=" ">News</Link></li>
                <li><Link to="crud">CRUD</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
  
        </div>
    )
}

export default Nav
