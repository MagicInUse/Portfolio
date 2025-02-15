import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.titleLink}>
                <h1 className={styles.title}>Jacob Norr's Portfolio</h1>
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;