import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";

interface whydata {
    heading: string;
    subheading: string;
    quote: string;
}

const whydata: whydata[] = [
    {
        heading: "feature rich.",
        subheading: `It is a feature-packed application designed to eliminate the hassle of tracking members manually. You can add, edit, and update members and set up plans & tariffs according to your gym with minimal effort. In addition, create payment reminders for outstanding payments and produce meaningful reports with ease.`,
        quote: ""
    },
    {
        heading: "why Sentinel.",
        subheading: `We understand not all your employees will be a whizz on a computer, and that’s why we designed Sentinel to be very easy to use. Both users and gym owners recommend Sentinel time and again because of its clear layout, easy navigation, and, of course, its simplicity. That really is the secret to why Sentinel comes so highly recommended.`,
        quote: "“What we’ve loved about Sentinel from the get-go is that it takes the hassle out of keeping up with all the members and their fees. It’s letting us spend our time making our gym better and attracting new members instead of going through piles of scrap paper to keep track of who’s paid and who hasn’t. It just works!” – Muscle Base Gym"

    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-10 py-10 sm:py-20 lg:px-8 lg:my-20'>
            {/* <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8 lg:my-20'> */}
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src={getAssetPath("/assets/why/ipad_sentinel.webp")} alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">sentinel.</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Sentinel is a powerful, robust and easy-to-use membership management system for gyms and clubs, guaranteed to save time and money.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src={getAssetPath("/assets/why/check.svg")} alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2 whitespace-pre-wrap">
                                            {items.subheading}
                                        </h5>
                                        <h5 className="text-lg text-beach font-normal mt-2 whitespace-pre-wrap font-style: italic">
                                            {items.quote}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
