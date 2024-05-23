import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useOverlay } from './overlay';
import style from '../style.module.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { openOverlay } = useOverlay();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.headerAlign}>
            <div className={style.header}>
                <div className="hamburger">
                    <button onClick={toggleMenu}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    {isOpen && (
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    )}
                </div>
                <Link to="/"><img src="" alt="TravelGenie" /></Link>
                <div onClick={openOverlay} style={{ cursor: 'pointer' }}>
                    <img src="profile-pic.jpg" alt="Profile" className={style.profileImage} />
                    <p>Profile</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
