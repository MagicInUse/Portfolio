import Card from '../components/Card/Card';

const About = () => {
  return (
    <Card
      heading="About Me"
      details={
        <>
          <p>I like to code! I've been working with code since 2008! I'm now going through school to learn how to apply my skills in a professional setting.
              I've worked on many projects utilizing many different languages. C#, C++, HTML, XML, CSS, Java & javascript. My main focus has been on the software
              side of things, but I collaborate on hardware and software related code with my best friend <a href="https://github.com/JarenElectron" rel="noopener noreferrer">Jaren</a>.
              He has definitely taught me a lot regarding how hardware functions. Before getting into the software industry, I worked with him at a manufacturing
              facility for PCBs/PCAs for eight years.
          </p>
          <p>I have a daughter named Jynx, who is the highlight of my life. I currently live in Northern Utah.
          </p>
          <p>In my free time I like to stream on <a href="https://www.twitch.tv/magicinuse" rel="noopener noreferrer">Twitch</a> and play guitar. Sometimes, both at the same time! That's through a game called <i>Rocksmith</i> which is like <i>Guitar Hero</i> but with a real guitar.
          </p>
        </>
      }
    />
  );
};

export default About;