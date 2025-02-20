import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import resume from '../../assets/Resume.pdf';
import { FileDownload } from '../../assets/SVGs';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/portfolio" 
                        className={({ isActive }) => 
                            isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    {location.pathname === '/resume' ? (
                        <a 
                            href={resume} 
                            download="Norr-Resume.pdf" 
                            className={styles.navlink}
                        >
                            Download <FileDownload />
                        </a>
                    ) : (
                        <NavLink 
                            to="/resume" 
                            className={({ isActive }) => 
                                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                            }
                        >
                            Resume
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;