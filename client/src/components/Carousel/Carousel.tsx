import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, currentIndex, onPrev, onNext }) => {
  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className={styles.carouselContainer}>
      <button 
        className={styles.scrollButton} 
        onClick={handlePrev}
        style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
      >
        &lt;
      </button>
      <div className={styles.carousel}>
        <div 
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 900}px)`, // Match the carouselItem width
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            width: `${children.length * 900}px` // Match the carouselItem width
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
        className={styles.scrollButton} 
        onClick={handleNext}
        style={{ visibility: currentIndex === children.length - 1 ? 'hidden' : 'visible' }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;