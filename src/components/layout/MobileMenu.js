'use client';
import { useState } from 'react';
import styles from './MobileMenu.module.css';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { FaChevronRight, FaSearch, FaNewspaper, FaUser } from 'react-icons/fa';
import Image from 'next/image';

export default function MobileMenu({ isOpen, onClose }) {
  const menuSections = [
    {
      title: 'मुख्य श्रेणियाँ',
      items: [
        { name: 'होम', slug: '/' },
        { name: 'राज्य', slug: '/rajya' },
        { name: 'देश', slug: '/desh' },
        { name: 'विदेश', slug: '/videsh' },
      ]
    },
    {
      title: 'खेल',
      items: [
        { name: 'क्रिकेट', slug: '/cricket' },
        { name: 'लाइव स्कोर', slug: '/live-score' },
      ]
    },
    {
      title: 'मनोरंजन',
      items: [
        { name: 'मनोरंजन', slug: '/entertainment' },
        { name: 'बॉलीवुड', slug: '/bollywood' },
        { name: 'टीवी', slug: '/tv' },
      ]
    },
    {
      title: 'अन्य',
      items: [
        { name: 'बिज़नेस', slug: '/business' },
        { name: 'करियर', slug: '/career' },
        { name: 'धर्म', slug: '/dharm' },
        { name: 'राशिफल', slug: '/rashifal' },
        { name: 'लाइफस्टाइल', slug: '/lifestyle' },
        { name: 'ऑटो', slug: '/auto' },
        { name: 'गैजेट्स', slug: '/gadgets' },
      ]
    }
  ];

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}></div>
      )}
      
      {/* Sidebar Menu */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>

        <div className={styles.mobileHeader}>
            <Link href="/" onClick={onClose} className={styles.logoIconButton}>
                <Image
                    src="/images/lh-logo-desk-copy.png" 
                    alt="Live Hindustan" 
                    width={20} 
                    height={20}
                    priority
                    className={styles.logo}
                />
            </Link>
            
            <div className={styles.headerActions}>
                <Link href="/epaper" className={styles.actionLink} onClick={onClose}>
                    <FaNewspaper className={styles.actionIcon} />
                    <span>ई-पेपर</span>
                </Link>
                
                <Link href="/signin" className={styles.actionLink} onClick={onClose}>
                    <FaUser className={styles.actionIcon} />
                    <span>साइन इन</span>
                </Link>
                
                <button onClick={onClose} className={styles.closeBtn}>
                    <IoClose className={styles.closeIcon} />
                </button>
            </div>
        </div>

        <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="यहाँ लिखें"
                    className={styles.searchInput}
                />
                <FaSearch className={styles.searchIcon} />
            </div>
        </div>
        
        <div className={styles.menuContent}>
          {menuSections.map((section, index) => (
            <div key={index} className={styles.menuSection}>
              <ul className={styles.menuList}>
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <Link 
                      href={item.slug} 
                      className={styles.menuLink}
                      onClick={onClose}
                    >
                      {item.name}
                      <FaChevronRight className={styles.chevron} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
