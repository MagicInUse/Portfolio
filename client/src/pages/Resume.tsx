import React from 'react';
import { Card } from '../components/Card';
import resume from '../assets/Resume.pdf';
import { FileDownload } from '../assets/SVGs';
import styles from '../components/Navigation/Navigation.module.css';

const Resume: React.FC = () => {
  return (
    <Card 
        heading="My Resume"
        details={
            <embed src="./assets/Resume.pdf" type="application/pdf" width="100%" height="600px" />
        }
    />
  );
};

export default Resume;