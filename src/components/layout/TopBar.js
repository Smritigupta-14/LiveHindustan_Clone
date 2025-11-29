"use client";
import Link from 'next/link';
import styles from './TopBar.module.css';
import { FaCamera, FaVideo, FaMapMarkerAlt, FaNewspaper, FaUser, FaSearch, FaRegMinusSquare, FaLine, FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import Image from 'next/image';
import { HiMenu } from "react-icons/hi"; 
import { useState } from 'react';
import MobileMenu from './MobileMenu';


export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.leftSection }>
          <div className={styles.menuButton} onClick={() => setIsMobileMenuOpen(true)}>
            <HiMenu style={{fontSize: "28px"}} />
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/lh-logo-desk.avif" 
                alt="Live Hindustan" 
                width={290} 
                height={50}
                priority
              />
            </Link>
          </div>
        </div>

        <div className={styles.rightSection }>
          <a href="/photos" className={styles.link}>
            <FaCamera /> फोटो 
          </a>
          <span className={styles.linkSeparator}>|</span>
          <a href="/videos" className={styles.link}>
            <FaVideo /> वीडियो
          </a>
          <span className={styles.linkSeparator}>|</span>
          <a href="/cities" className={styles.link}>
            <FaMapMarkerAlt /> शहर चुनें
          </a>
          <span className={styles.linkSeparator}>|</span>
          <a href="/epaper" className={styles.link}>
            <FaNewspaper /> ई-पेपर
          </a>
          <span className={styles.linkSeparator}>|</span>
          <a href="/signin" className={styles.link}>
            <FaUserAlt /> साइन इन
          </a>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '22px',
            padding: '2px 12px',
            width: '200px',
            height:'35px',
            background: '#fff'
          }}>
            <input
              type="text"
              placeholder="यहाँ लिखें"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                width: '100%',
                fontFamily: 'inherit',
                background: 'transparent'
              }}
            />
            <FaSearch style={{ color: '#b3b3b3', fontSize: '22px', marginLeft: '6px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      
       {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
}
