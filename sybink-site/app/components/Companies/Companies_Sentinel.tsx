"use client"
import Image from "next/image";
import React, { Component, createRef } from "react";
import Slider from "react-slick";
import { getAssetPath } from "@/app/lib/config";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  { imgSrc: getAssetPath("/assets/sentinel/cameracapture.png") },
  { imgSrc: getAssetPath("/assets/sentinel/delete02.png") },
  { imgSrc: getAssetPath("/assets/sentinel/gatekeeper.png") },
  { imgSrc: getAssetPath("/assets/sentinel/gatekeeper03.png") },
  { imgSrc: getAssetPath("/assets/sentinel/login.png") },
  { imgSrc: getAssetPath("/assets/sentinel/memberform.png") },
  { imgSrc: getAssetPath("/assets/sentinel/memberform03.png") },
  { imgSrc: getAssetPath("/assets/sentinel/plans05.png") },
  { imgSrc: getAssetPath("/assets/sentinel/reminder02.png") },
  { imgSrc: getAssetPath("/assets/sentinel/reminder03.png") },
  { imgSrc: getAssetPath("/assets/sentinel/reports01.png") },
  { imgSrc: getAssetPath("/assets/sentinel/settings01.png") },
];

interface State {
  showFullscreen: boolean;
  currentImage: string;
}

export default class MultipleItems extends Component<{}, State> {
  sliderRef = createRef<Slider>();

  state: State = {
    showFullscreen: false,
    currentImage: "",
  };

  openFullscreen = (imgSrc: string) => {
    this.setState({ showFullscreen: true, currentImage: imgSrc }, () => {
      if (this.sliderRef.current) this.sliderRef.current.slickPause();
    });
  };

  closeFullscreen = () => {
    this.setState({ showFullscreen: false, currentImage: "" }, () => {
      if (this.sliderRef.current) this.sliderRef.current.slickPlay();
    });
  };

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
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 640, settings: { slidesToShow: 2 } },
      ],
    };
    return (

      <div className="bg-white" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <hr />
          <div className="py-16">
            <Slider ref={this.sliderRef} {...settings}>
              {data.map((item, i) => (
                <div
                  key={i}
                  className="h-70 flex items-center justify-center px-6 cursor-pointer focus:outline-none object-contain hover:opacity-100 transition duration-300"
                  onClick={() => this.openFullscreen(item.imgSrc)}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={400}
                    height={200}
                    className="object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <hr />
        </div>

        {/* Fullscreen overlay */}
        {this.state.showFullscreen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer p-4"
            onClick={this.closeFullscreen}
          >
            <img
              src={this.state.currentImage}
              alt="fullscreen"
              className="object-contain max-w-[90vw] max-h-[90vh] rounded-md shadow-lg"
            />
          </div>
        )}
      </div>
    );
  }
}