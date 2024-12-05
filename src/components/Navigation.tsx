import { NavLink } from 'react-router-dom';
import resume from '../assets/Resume.pdf';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Contact</NavLink>
                </li>
                <li>
                    <a href={resume} download="Norr-Resume.pdf" className="navlink">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;