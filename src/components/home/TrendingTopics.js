'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './TrendingTopics.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TrendingTopics() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const topics = [
    { id: 1, name: 'चीफ जस्टिस सूर्यकांत', slug: 'chief-justice-suryakant' },
    { id: 2, name: 'SIR', slug: 'sir' },
    { id: 3, name: 'अनुच्छेद 240', slug: 'article-240' },
    { id: 4, name: 'दिल्ली कार धमाका', slug: 'delhi-car-blast' },
    { id: 5, name: 'बिग बॉस 19', slug: 'bigg-boss-19' },
    { id: 6, name: 'मौसम', slug: 'weather' },
    { id: 7, name: 'आज का राशिफल', slug: 'rashifal' },
    { id: 8, name: 'शेयर मार्केट', slug: 'share-market' },
    { id: 9, name: 'IPL 2026', slug: 'ipl-2026' },
  ];

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const tolerance = 2;
      setCanScrollLeft(container.scrollLeft > tolerance);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - tolerance
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollability, 350);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      
      window.addEventListener('resize', checkScrollability);
      container.addEventListener('scroll', checkScrollability);
      
      return () => {
        window.removeEventListener('resize', checkScrollability);
        container.removeEventListener('scroll', checkScrollability);
      };
    }
  }, []); 

  return (
    <section className={styles.trendingSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>ट्रेंडिंग टॉपिक्स</h2>
      </div>
      
      <div className={styles.scrollContainer}>
        <button 
          className={`${styles.scrollButton} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.topicsContainer} ref={scrollContainerRef}>
          <div className={styles.topicsWrapper}>
            {topics.map((topic) => (
              <a 
                key={topic.id} 
                href={`/topic/${topic.slug}`}
                className={styles.topicPill}
              >
                {topic.name}
              </a>
            ))}
          </div>
        </div>

        <button 
          className={`${styles.scrollButton} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          disabled={!canScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
