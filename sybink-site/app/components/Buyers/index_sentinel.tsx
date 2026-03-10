import Image from 'next/image';
import { getAssetPath } from '@/app/lib/config';

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: getAssetPath('/assets/buyers/user_green.png'),
        heading: "membership tracking.",
        subheading: `Add new members, collecting relevant details
          Quickly search and verify members with barcode, name, or postcode
          Capture member photos using the built-in camera
          Record member payments
          Pause and resume memberships while members are on holiday`
    },
    {
        imgSrc: getAssetPath('/assets/buyers/barcode.png'),
        heading: "member cards & fobs.",
        subheading: `Supplied with customised cards created by one of our designers and printed in full colour
          Cards imprinted with a unique barcode to be used with the supplied scanner
          Choice of card sizes (credit card or key fob)
          Additional cards available as and when required`,
    },
    {
        imgSrc: getAssetPath('/assets/buyers/calendar_view_month.png'),
        heading: "plans & tariffs.",
        subheading: `Create plans easily using the step-by-step wizard
          Facility to set up ‘renewal’, ‘pay as you go’, ‘pay-per-session’ and ‘promotional’ plans
          Assign plans with specified renewal fee, sign-up fee and pay-per-session charge
          Plans are easily identified using colour codes`,
    },
    {
        imgSrc: getAssetPath('/assets/buyers/alarm_bell.png'),
        heading: "reminders notifications.",
        subheading: `Send automated reminders for renewals and payments
          Notify members of upcoming expirations or outstanding balances
          Customisable notification settings
          Email or SMS alerts available`,
    },
    {
        imgSrc: getAssetPath('/assets/buyers/report.png'),
        heading: "reporting & analysis.",
        subheading: `Create fully customisable reports
          Analyse sales trends
          Produce member lists for all membership plans
          Create reports for different time periods (day, week, month, etc.)`,
    },
    {
        imgSrc: getAssetPath('/assets/buyers/help.png'),
        heading: "training & support.",
        subheading: `On-site installation, configured for your gym
          Training for all members of staff
          Free software updates with the latest features
          Free email and telephone support for all packages`,
    }

]

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-5 justify-items-center">
        {cardData.map((items, i) => (
          <div className="flex flex-col w-full" key={i}>
            
            {/* Heading row: image + heading */}
            <div className="flex items-center space-x-2">
              <div className="flex justify-center p-2 w-10 rounded-lg">
                <Image src={items.imgSrc} alt={items.imgSrc} width={50} height={50} />
              </div>
              <h3 className="text-2xl text-black font-semibold">{items.heading}</h3>
            </div>

            {/* Subheading list below heading */}
            <ul className="list-disc list-inside text-lg font-normal text-black text-opacity-50 mt-2">
              {items.subheading.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Buyers;