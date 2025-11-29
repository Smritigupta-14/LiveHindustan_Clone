import TopBar from '@/components/layout/TopBar';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'Live Hindustan',
  description: 'Hindi News Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}