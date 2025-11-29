import styles from './page.module.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopStories from '@/components/home/TopStories';
import CategorySection from '@/components/home/CategorySection';
import Sidebar from '@/components/layout/Sidebar';
import HoroscopeWidget from '@/components/home/HoroscopeWidget';
import TrendingTopics from '@/components/home/TrendingTopics';
import { getNewsData } from '@/lib/api';

export const revalidate = 300;

export default async function Category() {
  const newsData = await getNewsData();
  
  return (
    <>
      
    
      <main className={styles.main}>
        <div className={styles.container}>
          
          {/* Banner Ad Section */}
          <div className={styles.bannerAd}>
            <div className={styles.adPlaceholder}>Ad</div>
          </div>
          
          <div className={styles.mainGrid}>
            <div className={styles.mainContent}>
              
              <CategorySection 
                title="क्रिकेट" 
                articles={newsData.cricket}
                slug="cricket"
              />
              
              <CategorySection 
                title="मनोरंजन" 
                articles={newsData.entertainment}
                slug="entertainment"
              />
              
              <HoroscopeWidget />
              
              <CategorySection 
                title="धर्म" 
                articles={newsData.religion}
                slug="dharm"
              />
              
              <CategorySection 
                title="बिज़नेस" 
                articles={newsData.business}
                slug="business"
              />
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
  const { category } = await params;

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${categoryName} - Live Hindustan - हिंदी न्यूज़, ताज़ा समाचार, Breaking News in Hindi`,
    description: `लाइव हिंदुस्तान पर पढ़ें ${categoryName} की ताजा खबरें - देश, विदेश, क्रिकेट, मनोरंजन, बिज़नेस और राज्य की खबरें।`,
  };
}
