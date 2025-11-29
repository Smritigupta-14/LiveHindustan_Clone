import styles from './CategorySection.module.css';
import FeaturedCard from '@/components/cards/FeaturedCard';
import SmallCard from '@/components/cards/SmallCard';

export default function CategorySection({ title, articles = [], slug }) {
  if (articles.length === 0) return null;

  return (
    <section className={styles.categorySection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href={`/${slug}`} className={styles.viewAll}>और पढ़ें →</a>
      </div> 
       
      <div className={styles.grid}>
        <div>
          <div className={styles.featured}>
            <FeaturedCard article={articles[0]} slug={slug}  />
          </div>
          <SmallCard article={articles[1]} slug={slug} />
        </div>
 
        <div className={styles.smallNews}>
          {articles.slice(1, 5).map((article) => (
            <SmallCard key={article.id} article={article} slug={slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
