import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [

    {
        heading: "why sysPOS.",
        subheading: `We’ve gone back to the core of selling to make things simple, fast, and easy to use — ideal for those who aren’t whizzes on a computer. We looked at existing packages and realised one thing:`,

    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src={getAssetPath("/assets/why/ipad_syspos.webp")} alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">sysPOS.</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">sysPOS is an all-in-one POS solution specifically designed, developed, and updated for start-ups and small businesses. It’s also ideal for clubs, those running their own stalls, and anyone selling or managing inventory.</h4>

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
                                            They’re all bloated with features most retailers don’t need!
                                        </h5>
                                        <h5 className="text-lg text-beach font-normal mt-2 whitespace-pre-wrap">
                                            So why pay for something you won’t use? What’s more, having just the features you need means you can concentrate on running your business.
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
