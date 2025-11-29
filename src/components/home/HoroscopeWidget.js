import styles from './HoroscopeWidget.module.css';

export default function HoroscopeWidget() {
  const zodiacSigns = [
    { name: 'मेष', slug: 'mesh', icon: '♈' },
    { name: 'वृष', slug: 'vrishabh', icon: '♉' },
    { name: 'मिथुन', slug: 'mithun', icon: '♊' },
    { name: 'कर्क', slug: 'kark', icon: '♋' },
    { name: 'सिंह', slug: 'sinh', icon: '♌' },
    { name: 'कन्या', slug: 'kanya', icon: '♍' },
    { name: 'तुला', slug: 'tula', icon: '♎' },
    { name: 'वृश्चिक', slug: 'vrishchik', icon: '♏' },
    { name: 'धनु', slug: 'dhanu', icon: '♐' },
    { name: 'मकर', slug: 'makar', icon: '♑' },
    { name: 'कुम्भ', slug: 'kumbh', icon: '♒' },
    { name: 'मीन', slug: 'meen', icon: '♓' },
  ];

  return ( 
    <section className={styles.horoscopeSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>आज का राशिफल पढ़ने के लिए अपनी राशि चुनें</h2>
      </div>
      
      <div className={styles.zodiacGrid}>
        {zodiacSigns.map((sign) => (
          <a 
            key={sign.slug} 
            href={`/horoscope/${sign.slug}`}
            className={styles.zodiacCard}
          >
            <div className={styles.zodiacIcon}>{sign.icon}</div>
            <span className={styles.zodiacName}>{sign.name}</span>
            <button className={styles.readButton}>और देखें</button>
          </a>
        ))}
      </div>
    </section>
  );
}
