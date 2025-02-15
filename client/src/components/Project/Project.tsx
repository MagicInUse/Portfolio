import styles from './Project.module.css';

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
    <section className={styles.project}>
      <h2>{projectName}</h2>
      <img 
        src={imgPreview} 
        alt={altText} 
        className={styles.preview} 
        onClick={handleImageClick} 
      />
      <p>{description}</p>
    </section>
  );
};

export default Project;