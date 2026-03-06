import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Sybink Systems',
  description: 'market driven systems, built on industry proven technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
