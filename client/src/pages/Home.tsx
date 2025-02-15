import React from 'react';
import Card from '../components/Card/Card';
import AsideImg from '../components/AsideImg/AsideImg';
import headshot from '../assets/headshot.jpg';

const Home : React.FC = () => {
    return (
        <>
            <Card
                heading="Welcome to my Portfolio!"
                details={
                    <>
                    Along with being self-taught on many aspects of code ranging from C++, C#, to javascript, I have taken the initiative to turn my life around and go back to school for full-stack web development through the University of Utah!<br></br><br></br>This portfolio was made with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>. It is a single-page application with a navigation bar that links to different sections of the page. The page is styled with CSS and uses React components to display information. The page is responsive and can be viewed on different screen sizes. With the help of <a href="https://www.netlify.com/" target="_blank"  rel="noopener noreferrer">Netlify</a>, we are able to host the page. The page is also connected to a <a href="https://github.com/MagicInUse/Portfolio" target="_blank"  rel="noopener noreferrer">GitHub repository</a> for version control.
                    </>
                    }
                image={<AsideImg source={headshot} alt="A picture of Jake" classes="headshot" />}
            />
        </>
    );
};
  
export default Home;