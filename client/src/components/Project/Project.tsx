import React from 'react';
import Card from '../Card/Card';
import styles from './Project.module.css';
import ReactMarkdown from 'react-markdown'; // Import react-markdown

interface ProjectProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
    readme: string;
  };
}

const Project = ({ repo }: ProjectProps) => {
  return (
    <Card
      heading={repo.name}
      details={
        <div>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
          <div className={styles.readme}>
            <h3>README</h3>
            <ReactMarkdown>{repo.readme}</ReactMarkdown> {/* Render Markdown content */}
          </div>
        </div>
      }
    />
  );
};

export default Project;