import { NavLink } from 'react-router-dom';
import resume from '../assets/Resume.pdf';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeclassname="active" className="navlink">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeclassname="active" className="navlink">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="active" className="navlink">Contact</NavLink>
                </li>
                <li>
                    <a href={resume} download="Norr-Resume.pdf" className="navlink">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;