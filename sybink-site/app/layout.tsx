import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: "Sybink Systems | Market-driven systems. Built on proven technology",
  description: "Market-driven systems. Built on proven technology",
  metadataBase: new URL("https://sybink.com"),
  openGraph: {
    title: 'Sybink Systems',
    description: 'Market-driven systems. Built on proven technology.',
    type: "website",
    url: "/",
    locale: "en_GB",
    site_name: "Sybink Systems",
    images: [
      {
        url: "https://sybink.com/assets/logo/sybinksystems.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};


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
