import styles from './Sidebar.module.css';
import SmallCard from '@/components/cards/SmallCard';

export default function Sidebar({ viralNews = [] }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>वायरल खबरें</h2>
        <div className={styles.newsGrid}>
          {viralNews.slice(0, 5).map((news) => (
            <SmallCard key={news.id} article={news} slug={"viral"} />
          ))}
        </div> 
      </div>
      
      <div className={styles.adSection}>
        <div className={styles.adPlaceholder}>
          विज्ञापन
        </div>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>ट्रेंडिंग स्टॉक</h2>
        <div className={styles.stockWidget}>
          <div className={styles.stockItem}>
            <span className={styles.stockName}>Ashok Leyland</span>
            <span className={styles.stockPrice}>159.75</span>
            <span className={styles.stockChange}>+7.25%</span>
          </div>
          <div className={styles.stockItem}>
            <span className={styles.stockName}>Belrise Industries</span>
            <span className={styles.stockPrice}>167.45</span>
            <span className={styles.stockChange}>+5.31%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
