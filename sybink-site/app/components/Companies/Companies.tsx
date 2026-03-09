"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import { getAssetPath } from "@/app/lib/config";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: getAssetPath("/assets/carousel/MB-Logo.png")
    },
    {
        imgSrc: getAssetPath("/assets/carousel/Manaz.jpg")
    },
    {
        imgSrc: getAssetPath("/assets/carousel/DD-Logo.png")
    },
    {
        imgSrc: getAssetPath("/assets/carousel/MozaikTiles.jpg")
    },
    {
        imgSrc: getAssetPath("/assets/carousel/JawWilz-Logo.png")
    },
        {
        imgSrc: getAssetPath("/assets/carousel/Gillian.jpg")
    },
    {
        imgSrc: getAssetPath("/assets/carousel/FM.png")
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center'>
                {/* <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 cursor-pointer focus:outline-none object-contain opacity-70 hover:opacity-100 transition duration-300"> */}
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 cursor-pointer focus:outline-none object-contain opacity-70">
                    <div className="py-4 lg:py-14">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="focus:outline-none focus:ring-0">
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={140} height={140} />
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
