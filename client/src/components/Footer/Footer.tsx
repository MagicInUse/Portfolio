import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://github.com/MagicInUse" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://x.com/MagicInUse" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://www.linkedin.com/in/jacob-norr" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.link} href="https://open.spotify.com/user/magicinuse" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>{new Date().getFullYear()} | Jacob Norr</p>
    </footer>
  );
};

export default Footer;