import styles from './FeaturedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
 
export default function FeaturedCard({ article, large = false, slug }) {
  return (
    <Link href={`/${slug}/${article.slug}`} className={`${styles.card} ${large ? styles.large : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={article.image || '/images/placeholder.jpg'}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className={styles.image}
          priority={large}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        {article.category && (
          <span className={styles.category}>{article.category}</span>
        )}
        <h2 className={styles.title}>{article.title}</h2>
      </div>
    </Link>
  );
}
