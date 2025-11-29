import styles from './Footer.module.css';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube, FaApple, FaChevronRight } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  const categories = [
    {
      title: 'Career',
      links: ['Career News', 'Education', 'Engineering', 'Medical']
    },
    {
      title: 'Entertainment',
      links: ['Entertainment News', 'TV News', 'Web Series', 'Movie Review', 'Bigg Boss']
    },
    {
      title: 'Cricket',
      links: ['Cricket News', 'Live score']
    },
    {
      title: 'Lifestyle',
      links: ['Lifestyle Tips', 'Health', 'Fashion', 'Parenting tips', 'Travel', 'Fitness']
    },
    {
      title: 'Web Stories',
      links: ['Entertainment', 'Sports', 'Health', 'Trending', 'Beauty', 'Faith']
    }
  ];

  const footerLinks = [
    'आपसेपूछो', 'विज्ञापन दें', 'हमारे बारे में', 'संपर्क करें', 
    'गोपनीयता', 'साइट जानकारी'
  ];

  const legalLinks = [
    'Advertise with us', 'About us', 'Careers', 'Privacy', 
    'Contact us', 'Sitemap', 'Code Of Ethics'
  ];

  const partnerSites = [
    'Hindustan Times', 'Mint', 'HT Tech', 'Shine', 'HT Telugu', 
    'HT Bangla', 'HT Tamil', 'HT Marathi', 'HT Auto', 'Healthshots'
  ];

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Categories Section */}
          <div className={styles.categoriesSection}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>
                  {category.title} <FaChevronRight className={styles.chevron} />
                </h3>
                <div className={styles.categoryLinks}>
                  {category.links.map((link, linkIndex) => (
                    <a key={linkIndex} href="#">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>


          <div className={styles.bottomSection}>
            <div className={styles.logoSection}>
              <Image 
                src="/images/lh-logo-desk.avif" 
                alt="Live Hindustan" 
                width={300} 
                height={60}
              />
            </div>

            <div className={styles.bottomRightSection}>
              <div className={styles.socialSection}>
                <h4>Connect with us</h4>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="YouTube"><FaYoutube /></a>
                </div>
              </div>

              <div className={styles.appSection}>
                <h4>Download App</h4>
                <div className={styles.appLinks}>
                  <a href="#" className={styles.appButton}>
                    <FaGooglePlay size={20} />
                    <span>Google Play</span>
                  </a>
                  <a href="#" className={styles.appButton}>
                    <FaApple size={20} />
                    <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.hindiLinksBar}>
        <div className={styles.container}>
          <div className={styles.linksRow}>
            {footerLinks.map((link, index) => (
              <span key={index}>
                <a href="#">{link}</a>
                {index < footerLinks.length - 1 && <span className={styles.separator}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.legalBar}>
        <div className={styles.container}>
          <div className={styles.linksRow}>
            {legalLinks.map((link, index) => (
              <span key={index}>
                <a href="#">{link}</a>
                {index < legalLinks.length - 1 && <span className={styles.separator}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.partnerBar}>
        <div className={styles.container}>
          <div className={styles.partnerRow}>
            <span className={styles.partnerLabel}>Partner sites:</span>
            {partnerSites.map((site, index) => (
              <span key={index}>
                <a href="#">{site}</a>
                {index < partnerSites.length - 1 && <span className={styles.separator}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
