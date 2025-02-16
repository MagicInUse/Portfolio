import React from 'react';
import styles from './AsideImg.module.css';

interface AsideImgProps {
  source: string;
  alt: string;
  classes?: string;
  floatTo?: 'left' | 'right' | 'none';
}

const AsideImg: React.FC<AsideImgProps> = ({ source, alt, classes, floatTo }) => {
  const floatClass = floatTo === 'left' ? styles.floatLeft : floatTo === 'right' ? styles.floatRight : styles.floatNone;

  return (
    <aside>
      <img 
        src={source} 
        alt={alt} 
        className={`${styles.image} ${floatClass} ${classes || ''}`} 
      />
    </aside>
  );
};

export default AsideImg;