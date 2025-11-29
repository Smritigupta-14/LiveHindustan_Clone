'use client';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { HiDotsHorizontal } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname(); 
  
  // Extract the first segment of the path
  const getFirstSegment = (path) => {
    if (path === '/') return '/';
    const segments = path.split('/').filter(Boolean); 
    return '/' + segments[0]; 
  };
  
  const currentSection = getFirstSegment(pathname);
    
  const categories = [
    { name: 'होम', slug: '/' },
    { name: 'राज्य', slug: '/rajya' },
    { name: 'देश', slug: '/desh' },
    { name: 'क्रिकेट', slug: '/cricket' },
    { name: 'लाइव स्कोर', slug: '/live-score' },
    { name: 'मनोरंजन', slug: '/entertainment' },
    { name: 'बिज़नेस', slug: '/business' },
    { name: 'करियर', slug: '/career' },
    { name: 'विदेश', slug: '/videsh' },
    { name: 'धर्म', slug: '/dharm' },
    { name: 'राशिफल', slug: '/rashifal' },
    { name: 'लाइफस्टाइल', slug: '/lifestyle' },
    { name: 'ऑटो', slug: '/auto' },
    { name: 'गैजेट्स', slug: '/gadgets' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navMenu}>
          {categories.map((category) => (
            <li 
              key={category.slug} 
              className={`${styles.navLinkLi} ${currentSection === category.slug || currentSection === "" ? styles.active : ''}`}
            >
              <Link href={category.slug} className={styles.navLink}>
                {category.name}
              </Link>
            </li>
          ))}
          <li className={styles.navLinkLi}>
            <div className={styles.navLink}>
              <HiDotsHorizontal />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
