import React, { useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ children }, ref) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>{"<"}</button>
      <div className={styles.carousel} ref={carouselRef}>
        {children}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>{">"}</button>
    </div>
  );
});

export default Carousel;