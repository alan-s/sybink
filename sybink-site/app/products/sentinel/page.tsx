import Banner from '@/app/components/Banner/Banner_Sentinel';
import Companies from '@/app/components/Companies/Companies_Sentinel';
import Buyers from '@/app/components/Buyers/index_sentinel';
import Why from '@/app/components/Why/index_sentinel';
import Newsletter from '@/app/components/Newsletter/Newsletter';

export const metadata = {
  title: "Sybink Systems | Sentinel Membership Management",
  description: "Leading membership management software for gyms and clubs",
  metadataBase: new URL("https://sybink.com"),
  openGraph: {
    title: "Sybink Systems | Sentinel Membership Management",
    description: "Leading membership management software for gyms and clubs",
    url: "/products/sentinel",
    type: "website",
    locale: "en_GB",
    site_name: "Sybink Systems",
    images: [
      {
        url: "https://sybink.com/assets/sentinel/sentinel.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Buyers />
      <Companies />
      <Why />
      <Newsletter />
    </main>
  )
}
