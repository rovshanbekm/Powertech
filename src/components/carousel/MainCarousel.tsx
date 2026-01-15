"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from "@/src/assets";
import Image from "next/image";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            <div>
                <Image src={Banner} alt="Banner"  />
            </div>
            <div>
                <Image src={Banner} alt="Banner" />
            </div>
            <div>
                <Image src={Banner} alt="Banner" />
            </div>
        </Slider>
    );
}