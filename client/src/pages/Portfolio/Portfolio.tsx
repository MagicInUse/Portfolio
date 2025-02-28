import React, { useState, useEffect } from 'react';
import Project from '../../components/Project/Project';
import Carousel from '../../components/Carousel/Carousel';
import { fetchReposWithReadme } from '../../utils/github';
import styles from './Portfolio.module.css'; // Import CSS module for styling

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  readme: string;
  updated_at: string; // Add this field
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposWithReadme = await fetchReposWithReadme('MagicInUse');
        const filteredRepos = reposWithReadme
          .filter(repo => repo.readme.length >= 500)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + repos.length) % repos.length);
  };

  return (
    <div>
      <div className={styles.cardSection}>
        {repos.map((repo, index) => (
          <a key={repo.id} href={`#repo-${repo.id}`} className={styles.cardLink}>
            {repo.name}
          </a>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev} disabled={repos.length === 0} className={styles.button}>
          Previous
        </button>
        <button onClick={handleNext} disabled={repos.length === 0} className={styles.button}>
          Next
        </button>
      </div>
      <Carousel>
        {repos.map((repo, index) => (
          <div key={repo.id} id={`repo-${repo.id}`}>
            <Project repo={repo} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;