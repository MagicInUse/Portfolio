import React from 'react';
import styles from './AsideImg.module.css';

interface AsideImgProps {
  source: string;
  alt: string;
  classes?: string;
}

const AsideImg: React.FC<AsideImgProps> = ({ source, alt, classes }) => {
  return (
    <aside className={styles.asideFix}>
      <img 
        src={source} 
        alt={alt} 
        className={`${styles.image} ${classes || ''}`} 
      />
    </aside>
  );
};

export default AsideImg;