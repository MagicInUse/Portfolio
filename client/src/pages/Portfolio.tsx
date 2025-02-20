import React, { useState, useEffect } from 'react';
import Project from '../components/Project/Project';
import Carousel from '../components/Carousel/Carousel';
import { fetchReposWithReadme } from '../utils/github';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  readme: string;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposWithReadme = await fetchReposWithReadme('MagicInUse');
        setRepos(reposWithReadme);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <Carousel>
        {repos.map(repo => (
          <Project key={repo.id} repo={repo} />
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;