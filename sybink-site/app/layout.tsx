import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Sybink Systems',
  description: 'Market-driven systems. Built on proven technology.',
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
