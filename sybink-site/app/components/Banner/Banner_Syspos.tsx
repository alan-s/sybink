import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-navyblue sm:text-3xl  lg:text-5xl md:4px lh-66">
                            sysPOS Electronic Point of Sale
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            The all-in-one POS solution for gyms and small retailers.
                        </p>
                    </div>
                    <div className="flex justify-center mt-8 ml-10">
                        <Image
                            src={'/assets/syspos/sysposscreen.png'}
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
