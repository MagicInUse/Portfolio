import React, { useState, useEffect, useRef } from 'react';
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
  const cardSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposWithReadme = await fetchReposWithReadme('MagicInUse');
        const filteredRepos = reposWithReadme
          .filter(repo => repo.readme.length >= 500)
          .sort((a, b) => {
            // Place MagicInUse repo first
            if (a.name === 'MagicInUse') return -1;
            if (b.name === 'MagicInUse') return 1;
            // Then sort by update date
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
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

  const handleCarouselChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + repos.length) % repos.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % repos.length);
    }
  };

  return (
    <div>
      <div 
        ref={cardSectionRef}
        className={styles.cardSection}
      >
        {repos.map((repo, index) => (
          <a 
            key={repo.id} 
            href={`#repo-${repo.id}`} 
            className={`${styles.cardLink} ${currentIndex === index ? styles.active : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
          >
            {repo.name}
          </a>
        ))}
      </div>
      <div className={styles.controls}>
        <button 
          onClick={handlePrev} 
          disabled={repos.length === 0 || currentIndex === 0} 
          className={styles.button}
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          disabled={repos.length === 0 || currentIndex === repos.length - 1} 
          className={styles.button}
        >
          Next
        </button>
      </div>
      <Carousel 
        currentIndex={currentIndex}
        onPrev={() => handleCarouselChange('prev')}
        onNext={() => handleCarouselChange('next')}
      >
        {repos.map((repo) => (
          <div key={repo.id} id={`github-repo-id-${repo.id}`}>
            <Project repo={repo} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;