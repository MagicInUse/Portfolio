const Footer = () => {
    return (
      <footer>
        <ul>
          <li><a href="https://github.com/MagicInUse" target="_blank">GitHub </a></li>
          <li><a href="https://x.com/MagicInUse" target="_blank">X </a></li>
          <li><a href="https://www.linkedin.com/in/jacob-norr" target="_blank">LinkedIn </a></li>
          <li><a href="https://open.spotify.com/user/magicinuse" target="_blank">Spotify </a></li>
          <li><a href="https://www.twitch.tv/magicinuse" target="_blank">Twitch </a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} | Jacob Norr</p>
      </footer>
    );
  };
  
  export default Footer;