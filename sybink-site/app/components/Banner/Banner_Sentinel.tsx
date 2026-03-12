import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-8 sm:pt-12 lg:pt-16 pb-10 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-navyblue lh-96 sm:max-w-3xl lg:max-w-full mx-auto text-center text-balance">
                            sentinel membership management
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            Leading membership management software for gyms and clubs.
                        </p>
                    </div>
                    <div className="flex justify-center mt-8 ml-10">
                        <Image 
                            src={getAssetPath('/assets/banner/banner_sentinel.webp')} 
                            alt="banner-image" 
                            width={1024} 
                            height={1038} 
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
