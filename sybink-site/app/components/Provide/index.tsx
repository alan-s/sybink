import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/app/lib/config";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: getAssetPath("/assets/provide/marketing.svg"),
        country: "Software Development",
        paragraph: 'Reliable, scalable and affordable bespoke applications, tailored to your people and customers.',

    },
    {
        imgSrc: getAssetPath("/assets/provide/heaking.svg"),
        country: "Consultancy",
        paragraph: 'Industry experts to help you make the right technology decisions for your business',
    },
    {
        imgSrc: getAssetPath("/assets/provide/graphic.svg"),
        country: "Graphic & web design",
        paragraph: 'Vibrant print design and beautifully crafted, high-performing websites — ready to power your next campaign.',

    },
    {
        imgSrc: getAssetPath("/assets/provide/uidesign.svg"),
        country: "Helpdesk services",
        paragraph: 'With our dedicated support teams & competitive rates, our help desk packages always deliver!',
    }
]


const Provide = () => {
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">How we can help.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">We don’t believe the benefits of automated systems should be limited to large corporations only.  That is why Sybink Systems has lead in providing Small to Medium Businesses (SMB) complete, reliable and affordable bespoke applications.</h4>
                            <Link href={'/#contact'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Learn more <Image src={getAssetPath('/assets/provide/arrow.svg')} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
