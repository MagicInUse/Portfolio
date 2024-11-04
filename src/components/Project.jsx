const Project = ({ projectName, imgPreview, altText, description, classes}) => {
    return (
      <section>
        <h2>{projectName}</h2>
        <img src={imgPreview} alt={altText} className="projectpreview"/>
        <p>{description}</p>
      </section>
    );
};

export default Project;