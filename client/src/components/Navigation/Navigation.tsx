import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import resume from '../../assets/Resume.pdf';

const Navigation = () => {
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
                    <a 
                        href={resume} 
                        download="Norr-Resume.pdf" 
                        className={styles.navlink}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;