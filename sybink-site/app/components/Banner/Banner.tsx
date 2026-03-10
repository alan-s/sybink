import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 lg:pt-16 pb-10 banner-image">
                    {/* Background only visible on lg screens */}
                    {/* <div className="absolute inset-0 banner-image hidden lg:block" aria-hidden="true"></div> */}
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
                            market-driven systems.<br />built on proven technology.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray" >
                            Sybink Systems delivers innovative software development, web and graphic design, and technology consultancy from our London base.
                            <br /><br />
                            Discover <a href="/products/sentinel" className="font-semibold text-blue-600">Sentinel Membership Management</a> — the leading membership management software for small gyms, and <a href="/products/syspos" className="font-semibold text-blue-600">sysPOS</a> — the all-in-one POS solution for gyms and small retailers.
                        </p>
                    </div>

                    <div className="text-center mt-5">
                        <Link
                            href="/products/sentinel"
                            className="text-15px text-white font-medium bg-blue hover:bg-lightblue py-3 px-9 mt-2 leafbutton inline-block text-center">
                            Sentinel
                        </Link>
                        <Link
                            href="/products/syspos"
                            className="text-15px ml-4 mt-2 text-blue bg-lightblue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-3 px-9 leafbutton inline-block text-center">
                            sysPOS
                        </Link>

                    </div>
                    <div className="mt-16">
                        <Image
                            src={getAssetPath('/assets/banner/dashboard.webp')}
                            alt="banner-image"
                            width={1200}
                            height={598}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
