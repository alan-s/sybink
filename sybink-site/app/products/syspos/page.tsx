import Banner from '@/app/components/Banner/Banner_Syspos';
import Companies from '@/app/components/Companies/Companies_Syspos';
import Buyers from '@/app/components/Buyers/index_syspos';
import Why from '@/app/components/Why/index_syspos';
import Newsletter from '@/app/components/Newsletter/Newsletter';
import Provide from '@/app/components/Provide/index_syspos';

export const metadata = {
  title: "Sybink Systems | sysPOS Electronic Point of Sale",
  description: "The all-in-one POS solution for gyms and small retailers",
  openGraph: {
    title: "Sybink Systems | sysPOS Electronic Point of Sale",
    description: "The all-in-one POS solution for gyms and small retailers",
    url: "https://sybink.com/prodcuts/syspos",
    type: "website",
    locale: "en_GB",
    site_name: "Sybink Systems",
    images: [
      {
        url: "https://sybink.com/assets/syspos/syspos.webp",
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
      <Provide />
      <Newsletter />
    </main>
  )
}
