const Project = ({ projectName, imgPreview, altText, description }) => {
  const handleImageClick = () => {
      window.open(imgPreview, '_blank');
  };

  return (
    <section>
      <h2>{projectName}</h2>
      <img 
        src={imgPreview} 
        alt={altText} 
        className="projectpreview" 
        onClick={handleImageClick} 
        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable - throw an inline React style in there :P
      />
      <p>{description}</p>
    </section>
  );
};

export default Project;