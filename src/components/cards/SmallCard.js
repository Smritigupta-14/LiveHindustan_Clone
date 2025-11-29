import styles from './SmallCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SmallCard({ article, slug }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };
 
  const hasMultipleImages = article.images && article.images.length >= 2;

  return (
    <Link href={`/${slug}/${article.slug}`} className={styles.card}>
      {hasMultipleImages ? (
        <div className={styles.dualImageWrapper}>
          <div className={styles.imageHalf}>
            <Image
              src={article.images[0]}
              alt={article.title}
              fill
              sizes="80px"
              className={styles.image}
            />
          </div>
          <div className={styles.imageHalf}>
            <Image
              src={article.images[1]}
              alt={article.title}
              fill
              sizes="80px"
              className={styles.image}
            />
          </div>
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <Image
            src={article.image || '/images/placeholder.jpg'}
            alt={article.title}
            fill
            sizes="150px"
            className={styles.image}
          />
        </div>
      )}
      
      <div className={styles.content}>
        <h4 className={styles.title}>{article.title}</h4>
        {article.publishedAt && (
          <p className={styles.timestamp}>{formatDate(article.publishedAt)}</p>
        )}
      </div>
    </Link>
  );
}

