"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAssetPath } from "@/app/lib/config";

interface datatype {
    imgSrc: string;
    country: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: getAssetPath("/assets/syspos/videothumb-syspos-01.jpg"),
        country: "overview.",
        link: 'https://www.youtube.com/embed/pdcHVI14YAs',
    },
    {
        imgSrc: getAssetPath("/assets/syspos/videothumb-syspos-02.jpg"),
        country: "pos screen.",
        link: 'https://www.youtube.com/embed/PtGj5zdS4YU',
    },
    {
        imgSrc: getAssetPath("/assets/syspos/videothumb-syspos-03.jpg"),
        country: "setups.",
        link: 'https://www.youtube.com/embed/mJSYhykZzQY',
    },
    {
        imgSrc: getAssetPath("/assets/syspos/videothumb-syspos-04.jpg"),
        country: "inventory.",
        link: 'https://www.youtube.com/embed/39fZSnI7L0I',
    }
]

const Provide = () => {
    const [showFullscreen, setShowFullscreen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const openFullscreen = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setShowFullscreen(true);
    };

    const closeFullscreen = () => {
        setShowFullscreen(false);
        setCurrentVideo("");
    };

    return (
        <div id="services">
            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">explore sysPOS.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                Explore our videos showcasing sysPOS and its features. We’ve included a general overview, but if you have any questions or would like a more in-depth look, please don’t hesitate to contact us. We’re also happy to arrange live web sessions for full-feature demonstrations, where all your questions can be answered.
                            </h4>
                            <Link href={'/#contact'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">
                                Learn more <Image src={getAssetPath('/assets/provide/arrow.svg')} alt={'arrow'} width={20} height={20} />
                            </Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div
                                    key={i}
                                    className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl cursor-pointer hover:opacity-80 transition duration-300'
                                    onClick={() => openFullscreen(item.link)}
                                >
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={200} height={150} className="mb-5 object-contain" />
                                    <h4 className="text-xl font-medium">{item.country}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Fullscreen video overlay */}
            {showFullscreen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={closeFullscreen}
                >
                    <iframe
                        src={currentVideo + "?autoplay=1"}
                        title="sysPOS Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full max-w-[90vw] h-[60vh] md:h-[80vh] rounded-md shadow-lg"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking iframe
                    />
                </div>
            )}
        </div>
    );
}

export default Provide;