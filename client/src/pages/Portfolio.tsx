import React, { useState, useEffect } from 'react';
import { Project } from '../components/Project';
import { Carousel } from '../components/Carousel';

const Portfolio = () => {
  const [repos, setRepos] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MagicInUse/repos', {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Carousel>
      {repos.map(repo => (
        <Project key={repo.id} name={repo.name} />
      ))}
    </Carousel>
  );
};

export default Portfolio;