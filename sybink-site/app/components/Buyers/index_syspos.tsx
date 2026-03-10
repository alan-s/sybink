import Image from 'next/image';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { getAssetPath } from '@/app/lib/config';

const CollapsibleBox = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: getAssetPath('/assets/buyers/barcode.png'),
        heading: "electronic point of sale.",
        subheading: `Intuitive and simple transactions. Complete systems available with touchscreen, barcode scanner, receipt printer and till drawer.`
    },
    {
        imgSrc: getAssetPath('/assets/buyers/stock.png'),
        heading: "stock management.",
        subheading: `Quickly and easily add products and services. Monitor stock additions and deductions, and reduce purchasing costs immediately.`,
    },
    {
        imgSrc: getAssetPath('/assets/buyers/speedometer.png'),
        heading: "review & analysis.",
        subheading: `Review daily, weekly and monthly takings with engaging dashboards. Create meaningful reports with the ability to export to PDF or Excel.`,
    },

]

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 lg:mb-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5">
        {cardData.map((items, i) => (
          <div className="flex flex-col w-full" key={i}>
            
            {/* Heading row: image + heading */}
            <div className="flex items-center space-x-2">
              <div className="flex justify-center p-2 w-10 rounded-lg">
                <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
              </div>
              <h3 className="text-2xl text-black font-semibold">{items.heading}</h3>
            </div>

            {/* Subheading below heading */}
            <p className="text-lg font-normal text-black text-opacity-50 mt-2">
              {items.subheading}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Buyers;