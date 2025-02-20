import React, { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // To render HTML tags in Markdown
import remarkGfm from 'remark-gfm'; // To support GitHub Flavored Markdown tables
import { Card } from '../Card'; 
import styles from './Project.module.css'; 

interface ProjectProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
    readme: string;
  };
}

const Project = ({ repo }: ProjectProps) => {
  const [readmeHeight, setReadmeHeight] = useState('auto');
  const readmeRef = useRef<HTMLDivElement>(null);

  const updateReadmeHeight = () => {
    if (readmeRef.current) {
      const height = readmeRef.current.scrollHeight;
      setReadmeHeight(height > 500 ? '500px' : 'auto');
    }
  };

  useEffect(() => {
    updateReadmeHeight();
    window.addEventListener('resize', updateReadmeHeight);
    return () => window.removeEventListener('resize', updateReadmeHeight);
  }, [repo.readme]);

  const rawBaseUrl = `https://raw.githubusercontent.com/MagicInUse/${repo.name}/refs/heads/main/`;

  const transformImageUrl = (readme: string) => {
    return readme.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      if (url.startsWith('./')) {
        return `![${alt}](${rawBaseUrl}${url.slice(2)})`;
      }
      return match;
    });
  };

  const preprocessReadme = (readme: string) => {
    const transformedReadme = transformImageUrl(readme);
    return transformedReadme.replace(/<a\s+href="([^"]+)"[^>]*>\s*<img\s+src="([^"]+)"[^>]*>\s*<\/a>/g, (match, href, src) => {
      if (src.startsWith('./')) {
        src = `${rawBaseUrl}${src.slice(2)}`;
      }
      if (href.startsWith('./')) {
        href = `${rawBaseUrl}${href.slice(2)}`;
      }
      return `<a href="${href}" target="_blank" class="${styles.link}"><img src="${src}" class="${styles.image}"></a>`;
    });
  };

  const renderers = {
    img: ({ alt, src }: { alt?: string; src?: string }): JSX.Element | null => {
      if (!src) {
        return null;
      }
      if (src.startsWith('./')) {
        src = `${rawBaseUrl}${src.slice(2)}`;
      } else if (src.startsWith('assets')) {
        src = `${rawBaseUrl}${src}`;
      }
      return <img alt={alt} src={src} className={styles.image} />;
    },
    a: ({ href = '', children }: { href?: string; children?: React.ReactNode }): JSX.Element => {
      if (href.startsWith('./')) {
        href = `${rawBaseUrl}${href.slice(2)}`;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>{children}</a>;
    }
  };

  const preprocessedReadme = preprocessReadme(repo.readme);

  return (
    <Card
      heading={repo.name}
      details={
        <div>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
          <h3>README</h3>
          <div className={styles.readme} ref={readmeRef}>
            <ReactMarkdown components={renderers} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{preprocessedReadme}</ReactMarkdown> {/* Render Markdown content */}
          </div>
        </div>
      }
    />
  );
};

export default Project;