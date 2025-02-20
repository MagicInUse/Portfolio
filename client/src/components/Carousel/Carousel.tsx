import React, { useRef, useEffect, useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ children }, ref) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const updateMaxHeight = () => {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      const footerHeight = document.querySelector('footer')?.clientHeight || 0;
      setMaxHeight(window.innerHeight - headerHeight - footerHeight);
    };

    updateMaxHeight();
    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

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
    <div className={styles.carouselContainer} style={{ maxHeight: `${maxHeight}px` }}>
      <button className={styles.scrollButton} onClick={scrollLeft}>{"<"}</button>
      <div className={styles.carousel} ref={carouselRef}>
        {children}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>{">"}</button>
    </div>
  );
});

export default Carousel;