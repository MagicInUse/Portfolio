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
                        <p>
                            With a strong foundation in full-stack web development, I have honed my skills 
                            in various programming languages and frameworks. I am proficient in JavaScript & C#, 
                            and have extensive experience with <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node
                            </a> and <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a>. Along with software, 
                            I also have experience building and maintaining computers, setting up networks, and
                            troubleshooting hardware and software issues. Going further into hardware, I have
                            experience with 3D printing and CNC machining, including design and operation. 
                            I am always eager to learn new technologies and take on new challenges. My most 
                            recent hardware project involves the <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener noreferrer">
                            ESP32</a> microcontroller and learning C++!
                        </p>
                        <p>
                            My journey in web development began with a full-stack bootcamp at the <a href="https://www.utah.edu/" target="_blank" rel="noopener noreferrer">
                            University of Utah</a>, where I gained hands-on experience in building dynamic and responsive 
                            web applications alone and in a group setting. This portfolio showcases my projects 
                            and skills, demonstrating my ability to create efficient and scalable solutions.
                        </p>
                        <p>
                            This portfolio was made with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                            React</a>. It is a single-page application with a navigation bar that links to different 
                            sections of the page. The page is styled with custom CSS modules for more permanent solutions 
                            and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a> for drafting,
                            while using React components to display information. The page is responsive and can be viewed on different screen sizes.
                            In class, we used deployment resources like <a href="https://render.com/" target="_blank" rel="noopener noreferrer">Render
                            </a>, <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify
                            </a>, and <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel
                            </a>. Since then, I have moved to a <a href="https://magicapps.dev/" target="_blank" rel="noopener noreferrer">personal hosting 
                            service</a> for my own deployments. The page is also connected to a <a href="https://github.com/MagicInUse/Portfolio" target="_blank"  rel="noopener noreferrer">
                            GitHub repository</a> for version control.
                        </p>
                    </>
                    }
                image={<AsideImg source={headshot} alt="A picture of Jake" classes="headshot" />}
            />
        </>
    );
};
  
export default Home;