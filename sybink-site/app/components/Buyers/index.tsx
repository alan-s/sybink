import Image from 'next/image';
import { getAssetPath } from '@/app/lib/config';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: getAssetPath('/assets/buyers/ourbuyers.svg'),
        percent: '4+',
        heading: "years operating.",
        subheading: "Since 2011, we've continued to provide technology services to London SMBs.",
    },
    {
        imgSrc: getAssetPath('/assets/buyers/projectcompleted.svg'),
        percent: '50+',
        heading: "projects delivered.",
        subheading: "We've delivered projects to gyms, restaurants, retailers, pharmacies, and many more.",
    },
    {
        imgSrc: getAssetPath('/assets/buyers/happybuyers.svg'),
        percent: '88%',
        heading: "recommendation.",
        subheading: "We’re highly rated, with most of our clients coming through recommendations.",
    },
    {
        imgSrc: getAssetPath('/assets/buyers/teammembers.svg'),
        percent: '24/7',
        heading: "ongoing support.",
        subheading: "We offer unrivalled support throughout your project.",
    }

]

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
        {cardData.map((items, i) => (
          <div className="flex flex-col w-full items-center" key={i}>

            {/* Percent above */}
            <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2>

            {/* Heading row: image + heading */}
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex justify-center border border-border p-2 w-10 rounded-lg">
                <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
              </div>
              <h3 className="text-2xl text-black font-semibold">{items.heading}</h3>
            </div>

            {/* Subheading below */}
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
