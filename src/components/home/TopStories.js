import styles from './TopStories.module.css';
import FeaturedCard from '@/components/cards/FeaturedCard';
import SmallCard from '@/components/cards/SmallCard';

export default function TopStories({ articles = [], slug}) {
  if (articles.length === 0) return null;

  return (
    <section className={styles.categorySection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Hindi News</h2>
      </div> 
       
      <div className={styles.grid}>
        <div>
          <div className={styles.featured}>
            <FeaturedCard article={articles[0]} slug={slug} />
          </div>
            {articles.slice(1, 4).map((article) => (
              <SmallCard key={article.id} article={article} slug={slug} />
            ))}
        </div>
 
        <div className={styles.smallNews}>
          {articles.slice(1, 7).map((article) => (
            <SmallCard key={article.id} article={article} slug={slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
