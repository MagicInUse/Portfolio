const Project = ({ projectName, imgPreview, altText, description }) => {
    return (
      <section>
        <h3>{projectName}</h3>
        <img src={imgPreview} alt={altText}/>
        <p>{description}</p>
      </section>
    );
};

export default Project;