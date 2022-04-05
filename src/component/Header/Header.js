import React from 'react';
// import { Link as a } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='headers'>
            <a href='/home'>Home</a>
            <a href='/reviews'>Reviews</a>
            <a href='/blog'>Blog</a>
            <a href='/dashboard'>Dashboard</a>
            
        </div>
    );
};

export default Header;