import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;