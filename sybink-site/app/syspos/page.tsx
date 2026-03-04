import Banner from '@/app/components/Banner/Banner_Syspos';
import Companies from '@/app/components/Companies/Companies_Syspos';
import Buyers from '@/app/components/Buyers/index_syspos';
import Why from '@/app/components/Why/index_syspos';
import Newsletter from '@/app/components/Newsletter/Newsletter';

export const metadata = {
  title: "sysPOS",
  description: "sysPOS Electronic Point of Sale",
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
