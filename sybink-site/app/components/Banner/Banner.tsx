import Image from "next/image";
import Link from "next/link";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-navyblue sm:text-3xl  lg:text-5xl md:4px lh-66">
                            market-driven systems, <br />built on proven technology.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray" >
                            Sybink Systems delivers innovative software development, web and graphic design, and technology consultancy from our London base.
                            <br /><br />
                            Sentinel — leading gym membership management software, and sysPOS — the all-in-one POS solution for gyms and small retailers.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <Link
                            href="/products/sentinel"
                            className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton inline-block text-center">
                            Sentinel Membership Management
                        </Link>
                        <Link
                            href="/products/syspos"
                            className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton inline-block text-center">
                            sysPOS Point of Sale
                        </Link>

                    </div>

                    {/* <Image src={'/assets/syspos/banner.png'} alt="banner-image" width={1200} height={598} /> */}
                </div>
            </div>
        </main>
    )
}

export default Banner;
