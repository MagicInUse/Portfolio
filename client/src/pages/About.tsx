import { Card } from '../components/Card';

const About = () => {
  return (
    <Card
      heading="About Me"
      details={
        <>
          <p>
            I am a passionate full-stack web developer with a strong foundation in various programming languages and frameworks.
            My journey in coding began in 2008, and I have since honed my skills in JavaScript, C#, C++, HTML, CSS, and more.
            I have recently pursued and completed more formal education to further enhance my professional capabilities.
          </p>
          <p>
            My expertise extends beyond software development. I have hands-on experience in building and maintaining computers,
            setting up networks, and troubleshooting hardware and software issues. Additionally,
            I have delved into 3D printing and CNC machining, including design and operation.
          </p>
          <p>
            One of my recent projects involves working with the <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener noreferrer">
            ESP32</a> microcontroller and learning C++. I am always eager to learn new technologies and take on new challenges.
          </p>
          <p>
            Before transitioning to the software industry, I spent eight years working at a manufacturing facility for PCBs/PCAs, 
            where I gained valuable insights into hardware functions. I often collaborate with my best friend <a href="https://github.com/JarenElectron" rel="noopener noreferrer">
            Jaren</a>, who has taught me a lot about hardware.
          </p>
          <p>
            I have a daughter, Jynx, who is the highlight of my life. I currently reside in Northern Utah. In my free time, 
            I enjoy streaming on <a href="https://www.twitch.tv/magicinuse" rel="noopener noreferrer">Twitch</a> and playing guitar, 
            sometimes both at the same time through a game called <a href="https://www.ubisoft.com/en-us/game/rocksmith/2014-remastered" rel="noopener noreferrer">Rocksmith</a>.
          </p>
        </>
      }
    />
  );
};

export default About;