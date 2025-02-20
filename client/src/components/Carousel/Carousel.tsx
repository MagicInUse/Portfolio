import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className={styles.carousel}>
      {children}
    </div>
  );
};

export default Carousel;