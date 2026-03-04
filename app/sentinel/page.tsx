import Banner from '@/app/components/Banner/Banner_Sentinel';
import Companies from '@/app/components/Companies/Companies_Sentinel';
import Buyers from '@/app/components/Buyers/index_sentinel';
import Why from '@/app/components/Why/index_sentinel';
import Newsletter from '@/app/components/Newsletter/Newsletter';

export const metadata = {
  title: "Sentinel",
  description: "Sentinel Membership Management",
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
