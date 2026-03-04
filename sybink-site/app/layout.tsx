import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Sybink Systems',
  description: 'Market driven systems, built on industry proven technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <section id="contact">
          <Footer />
        </section>
      </body>
    </html>
  )
}
