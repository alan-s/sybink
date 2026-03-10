import Banner from '@/app/components/Banner/Banner';
import Companies from '@/app/components/Companies/Companies';
import Buyers from '@/app/components/Buyers/index';
import Provide from '@/app/components/Provide/index';
import Why from '@/app/components/Why/index';
import Network from '@/app/components/Network/index';
import Clientsay from '@/app/components/Clientsay/index';
import Newsletter from '@/app/components/Newsletter/Newsletter';


export default function Home() {
  return (
    <main>
      <Banner />
      <Why />
      <Buyers />
      <Companies />
      <Provide />
      {/* <Network /> */}
      <Clientsay />
      <Newsletter />
    </main>
  )
}
