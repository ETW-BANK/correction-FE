import React, { createContext, useState, useContext } from "react";
import ReactDOM from 'react-dom'
import style from '../style.module.css'
import { AuthContext } from './Auth';
import { Link } from 'react-router-dom';

const OverlayContext = createContext();
export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openOverlay = () => setIsOpen(true);
    const closeOverlay = () => setIsOpen(false);

    return (
        <OverlayContext.Provider value={{ isOpen, openOverlay, closeOverlay }}>
            {children}
            <Overlay isOpen={isOpen} onclose={closeOverlay} />
        </OverlayContext.Provider>
    );
};

const Overlay = ({ isOpen, onClose }) => {
    const { isSignedIn, setSignedIn } = useContext(AuthContext);
    if (!isOpen) return null;

    const handleSignOut = () => {
        setSignedIn(false);
        onClose();
    }

    const closeOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return ReactDOM.createPortal(
        <div className={style.overlay} onClick={closeOverlay}>
            <div className={style.overlayContent} onClick={(e) => e.stopPropagation()}>
                <h1>{isSignedIn ? 'Profile' : 'Login'}</h1>
                {isSignedIn ? (
                    <>
                        <p>Welcome, User!</p>
                        <button onClick={handleSignOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/signup"><button>Sign up</button></Link>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Overlay;