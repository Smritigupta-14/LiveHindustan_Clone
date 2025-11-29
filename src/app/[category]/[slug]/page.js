import styles from './page.module.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import Image from 'next/image';
import { getArticleBySlug, getNewsData } from '@/lib/api';

export const revalidate = 300;

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  
  console.log('Category:', category);
  console.log('Slug:', slug);
  
  const article = await getArticleBySlug(slug);

  const newsData = await getNewsData();
  
  return (
    <>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            <div className={styles.articleContent}>
              {article ? (
                <>
                  <h1 className={styles.title}>{article.title}</h1>
                  
                  <p className={styles.date}>
                    {new Date(article.publishedAt).toLocaleString('en-US', {
                      weekday: 'short',
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </p>
                  
                  {article.image && (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={500}
                        className={styles.image}
                      />
                    </div>
                  )}
                  
                  <div className={styles.content}>
                    <p>{article.summary || article.title}</p>
                    <p>यह खबर {article.category} से संबंधित है।</p>
                  </div>
                </>
              ) : (
                <div className={styles.notFound}>
                  <h1>खबर नहीं मिली</h1>
                  <p>यह लेख उपलब्ध नहीं है।</p>
                  <a href="/" className={styles.homeLink}>होम पर जाएं</a>
                </div>
              )}
            </div>
            
            <Sidebar viralNews={newsData.viral} />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(slug);
  
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  if (!article) {
    return {
      title: 'Article Not Found - Live Hindustan',
      description: 'यह लेख उपलब्ध नहीं है।',
    };
  }
  
  return {
    title: `${article.title} - ${categoryName} - Live Hindustan - हिंदी न्यूज़, ताज़ा समाचार, Breaking News in Hindi`,
    description: article.summary || article.title,
  };
}