import { useState } from 'react';
import styles from './Project.module.css';

interface ProjectProps {
  name: string;
}

const Project = ({ name: repoName }: ProjectProps) => {
  return (
    <div>
      <h3>{repoName}</h3>
    </div>
  );
};

export default Project;