import React from 'react';

interface ProjectProps {
  projectName: string;
  imgPreview: string;
  altText: string;
  description: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ projectName, imgPreview, altText, description }) => {
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
        style={{ cursor: 'pointer', width: '100%' }} 
      />
      <p>{description}</p>
    </section>
  );
};

export default Project;