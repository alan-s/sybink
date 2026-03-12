import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-8 sm:pt-12 lg:pt-16 pb-10 banner-image">
                    <div className="text-center">
                        {/* <h1 className="text-2xl font-semibold text-navyblue sm:text-3xl lg:text-5xl md:4px lh-66"> */}
                        {/* <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl lh-96"> */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-navyblue lh-96 sm:max-w-3xl lg:max-w-full mx-auto text-center text-balance">
                            <span className="block">sysPOS</span>
                            <span className="block">electronic point of sale</span>
                            {/* sysPOS Electronic Point of Sale */}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            The all-in-one POS solution for gyms and small retailers.
                        </p>
                    </div>
                    <div className="flex justify-center mt-8 ml-10">
                        <Image
                            src={getAssetPath('/assets/banner/banner_syspos.webp')}
                            alt="banner-image"
                            width={1000}
                            height={498}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
