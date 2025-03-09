import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, currentIndex, onPrev, onNext }) => {
  return (
    <div className={styles.carouselContainer}>
      <button 
        className={`${styles.scrollButton} ${currentIndex === 0 ? styles.hidden : ''}`}
        onClick={onPrev}
      >
        &lt;
      </button>
      <div className={styles.carousel}>
        <div 
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {React.Children.map(children, (child) => (
            <div className={styles.carouselItem}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button 
        className={`${styles.scrollButton} ${currentIndex === children.length - 1 ? styles.hidden : ''}`}
        onClick={onNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;