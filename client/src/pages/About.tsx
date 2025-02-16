import { Card } from '../components/Card';

const About = () => {
  return (
    <Card
      heading="About Me"
      details={
        <>
          <p>
            I am a passionate full-stack web developer with a strong foundation in various programming languages and frameworks.
          </p>
          <p>
            My journey in coding and networking really began in 1999, with my first introduction to Blizzard's Battle.Net service and <a href="https://us.shop.battle.net/en-us/family/starcraft-remastered" target="_blank" rel="noopener noreferrer">
            Starcraft</a> custom maps. This quickly evolved into a keen interest in <a href="https://us.shop.battle.net/en-us/product/warcraft-3-reforged" target="_blank" rel="noopener noreferrer">
            WarCraft III</a> custom maps, and learning a small game engine called <a href="https://gamemaker.io/en" target="_blank" rel="noopener noreferrer">
            Game Maker</a>. Years later, between 2010 and 2013, I offered freelance web hosting services and learnt a bit of C# and <a href="https://unity.com/" rel="noopener noreferrer">
            Unity</a> video game development. After my daughter was born I started a career in manufacturing, but my passion for software never waned.
          </p>
          <p>
            I have since honed my skills in JavaScript, C#, C++, HTML, CSS, and more. 
            I recently pursued and completed more formal education to further enhance my professional capabilities, but there will forever be more to learn!
          </p>
          <p>
            My expertise extends beyond software development. I have hands-on experience in building and maintaining computers, 
            setting up networks, and troubleshooting hardware and software issues. Additionally, 
            I have delved into 3D printing and CNC machining, including design and operation.
          </p>
          <p>
            One of my recent projects involves working with the <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener noreferrer">
            ESP32</a> microcontroller and learning C++. 
            I also set up dual booting with <a href="https://www.linuxmint.com/" rel="noopener noreferrer">
            Linux Mint</a> and have been practicing that OS workflow. I am always eager to learn new technologies and take on new challenges.
          </p>
          <p>
            Before transitioning to the software industry, I spent eight years working at a manufacturing facility for PCBs/PCAs, 
            where I gained valuable insights into hardware functions. I often collaborate with my best friend <a href="https://github.com/JarenElectron" rel="noopener noreferrer">
            Jaren</a>, who has taught me a lot about hardware.
          </p>
          <p>
            I have a daughter, Jynx, who is the highlight of my life. I currently reside in Northern Utah. In my free time, 
            I enjoy streaming on <a href="https://www.twitch.tv/magicinuse" rel="noopener noreferrer">
            Twitch</a> and playing guitar, sometimes both at the same time through a game called <a href="https://www.ubisoft.com/en-us/game/rocksmith/2014-remastered" rel="noopener noreferrer">
            Rocksmith</a>.
          </p>
        </>
      }
    />
  );
};

export default About;