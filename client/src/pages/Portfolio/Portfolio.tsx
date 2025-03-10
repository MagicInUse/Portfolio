import React, { useState, useEffect, useRef, useCallback } from 'react';
import Project from '../../components/Project/Project';
import Carousel from '../../components/Carousel/Carousel';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { fetchReposWithReadme } from '../../utils/github';
import styles from './Portfolio.module.css';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  readme: string;
  updated_at: string;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false);

  // Single, consistent centering function
  const centerActiveCard = useCallback((index: number) => {
    if (cardSectionRef.current) {
      const container = cardSectionRef.current;
      const activeCard = container.children[index] as HTMLElement;
      
      if (activeCard) {
        activeCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, []);

  // Single scroll handler
  useEffect(() => {
    const container = cardSectionRef.current;
    if (!container) return;

    const handleScrollStart = () => {
      isManualScrolling.current = true;
    };

    container.addEventListener('touchstart', handleScrollStart);
    container.addEventListener('mousedown', handleScrollStart);

    return () => {
      container.removeEventListener('touchstart', handleScrollStart);
      container.removeEventListener('mousedown', handleScrollStart);
    };
  }, [currentIndex, centerActiveCard]);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    isManualScrolling.current = false;
    centerActiveCard(index);
  };

  const handleCarouselChange = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + repos.length) % repos.length
      : (currentIndex + 1) % repos.length;
    
    setCurrentIndex(newIndex);
    isManualScrolling.current = false;
    centerActiveCard(newIndex);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
              handleCardClick(index);
            }}
          >
            {repo.name}
          </a>
        ))}
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