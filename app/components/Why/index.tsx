import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Market driven systems, built on industry proven technologies",
        subheading: `This mindset underpins our strategy, planning, and service delivery. We design, develop, and maintain systems that are scalable, robust, and user-focused, built on proven industry technologies — and our own innovations where needed. Our goal is to equip businesses with the tools to empower their people and deliver their strategy.`,
    },
    {
        heading: "Our History",
        subheading: `Founded in 2011, Sybink Systems has championed bespoke development for small and medium-sized businesses. We recognised that while large corporations can afford custom systems, SMBs often have different needs and tighter budgets — and we set out to change that. By listening to business and IT leaders, we’ve delivered functional, robust, design-led solutions tailored to organisations of all sizes.

We’ve grown steadily by prioritising reputation and service over rapid expansion. Today, we receive enquiries from across London, the wider UK, and internationally. Most importantly, we’re proud that many of our clients return to us time and again for new projects.`,

    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">About Us.</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Sybink Systems is a London-based IT solutions provider offering software development, web and graphic design, and consultancy services. We integrate robust hardware and software to deliver fully tested, end-to-end solutions.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2 whitespace-pre-wrap">
                                            {items.subheading}
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
