import Project from '../components/Project';
import flashPreview from '../assets/flashPreview.png';
import inputPreview from '../assets/inputPreview.png';
import js1 from '../assets/js1.png';
import js2 from '../assets/js2.png';

const Portfolio = () => {
    return (
      <>
        <Project
          projectName="Flash Cards"
          imgPreview={flashPreview}
          altText="A preview of the Flash Cards application"
          description={
            <>
              For studying, my girlfriend wanted a portable, easily accessible version of her flash cards. Using my own prior knowledge, the fundamentals learned in my bootcamp course and with GitHub Copilot, I came up with a <a href="https://github.com/MagicInUse/FlashCards">simple application</a> to do that. It's still a work in progress, but it's a good start.
            </>
          }
        />
        <Project
        projectName="Keyboard & Mouse Input Display"
        imgPreview={inputPreview}
        altText="A preview of the Keyboard & Mouse Input Display application"
        description={
          <>
            I wanted to make an <a href="https://github.com/MagicInUse/KeyboardInputDisplay">application</a> that could display keyboard and mouse inputs for my twitch channel. This is still a work in progress to get back to once school slows down. I started this while things were still slow-going during HTML & CSS lessons.
          </>
        }
        />
        <Project
        projectName="Canvas & ESP32-CAM"
        imgPreview={js2}
        altText="A code snippet from an application"
        description={
          <>
            A side project I started to learn more about the ESP32-CAM and how to use it with a Canvas element. Jaren is wanting to learn machine vision, so along with making the GUI, I'm also learning how to use the ESP32-CAM to take pictures and use a canvas to go over the RGBA values.
          </>
        }
        />
        <Project
        projectName="PCB / Placement Comparison Tool"
        imgPreview={js1}
        altText="A code snippet from an application"
        description={
          <>
            This was a real-world problem I was asked to solve at my previous occupation before going back to school. I was given two files that dealth with PCB and placement information that needed to show any differences between the two. It's a bit sloppy, but it closed a Supplier Corrective Action Report! 
          </>
        }
        />
      </>
    );
  };
  
  export default Portfolio;