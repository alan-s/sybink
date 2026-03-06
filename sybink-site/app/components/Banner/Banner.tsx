import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-20 sm:pt-20 lg:pt-16 pb-20 banner-image">
                    {/* Background only visible on lg screens */}
                    {/* <div className="absolute inset-0 banner-image hidden lg:block" aria-hidden="true"></div> */}
                    <div className="text-center">
                        {/* <h1 className="text-2xl font-semibold text-navyblue sm:text-3xl lg:text-5xl md:4px lh-66"> */}
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            market-driven systems <br />built on proven technology.
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
                            className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton inline-block text-center">
                            Sentinel
                        </Link>
                        <Link
                            href="/products/syspos"
                            className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton inline-block text-center">
                            sysPOS
                        </Link>

                    </div>
                    {/* <div className="flex justify-center mt-8 ml-10">
                        <Image
                            src={getAssetPath('/assets/syspos/banner3.png')}
                            alt="banner-image"
                            width={1000}
                            height={498}
                        />
                    </div> */}

                    {/* <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} /> */}
                </div>
            </div>
        </main>
    )
}

export default Banner;
