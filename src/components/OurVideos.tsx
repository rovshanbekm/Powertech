"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRef } from "react";


const youtubeVideoUrl = [
    {
        id: 1,
        url: "https://youtube.com/shorts/QrghdsetDNc?si=UAsuufDC4laaTLE1",
    },
    {
        id: 2,
        url: "https://youtu.be/0SD_Mts-oUE?si=x4VxPBX3y7VHVna5",
    },
    {
        id: 3,
        url: "https://youtu.be/-9X9dVfGAFA?si=UU6JCzKbdLDI7F2s",
    },
    {
        id: 4,
        url: "https://youtu.be/izCVODLcC9k?si=SW5_1_irY_5QEGc5",
    },
]

const OurVideos = () => {

    const { t } = useLanguage();
    const sliderSettings = {
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 600,
        arrows: false,
        dots: true,
    };
    const playersRef = useRef<Record<number, any>>({});

    const onReady = (id: number) => (event: any) => {
        playersRef.current[id] = event.target;
    };

    const onPlay = (id: number) => () => {
        Object.entries(playersRef.current).forEach(([key, player]) => {
            if (Number(key) !== id) {
                player.pauseVideo();
            }
        });
    };

    // agar iframe ishlatilsa quyidagi funksiya kerak bo'ladi

    // const toEmbedUrl = (url: string) => {
    //     if (url.includes("embed")) return url;

    //     if (url.includes("youtu.be/")) {
    //         return `https://www.youtube.com/embed/${url.split("/").pop()?.split("?")[0]}`;
    //     }
    //     if (url.includes("shorts/")) {
    //         return `https://www.youtube.com/embed/${url.split("/").pop()?.split("?")[0]}`;
    //     }

    //     if (url.includes("watch?v=")) {
    //         return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`;
    //     }

    //     return url;
    // };

    const getVideoId = (url: string) => {
        if (url.includes("youtu.be/")) {
            return url.split("youtu.be/")[1].split("?")[0];
        }

        if (url.includes("shorts/")) {
            return url.split("shorts/")[1].split("?")[0];
        }

        if (url.includes("watch?v=")) {
            return url.split("watch?v=")[1].split("&")[0];
        }

        return "";
    };

    const opts: YouTubeProps['opts'] = {
        width: "100%",
        height: "100%",
        playerVars: {
            mute: 1,   
            controls: 1,
            rel: 0,
            modestbranding: 1,
        },
    };
    return (
        <div className="container-wide py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-center">{t.products.title2}</h2>
            <div className="lg:hidden">
                <Slider {...sliderSettings}>
                    {youtubeVideoUrl.map((item) => (
                        <div key={item.id} className="w-full h-[400px] px-0">
                            <YouTube
                                videoId={getVideoId(item.url)}
                                opts={opts}
                                onReady={() => onReady(item.id)}
                                onPlay={() => onPlay(item.id)}
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                {youtubeVideoUrl.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <YouTube videoId={getVideoId(item.url)} opts={opts} onReady={onReady(item.id)} onPlay={onPlay(item.id)} className="w-full h-[300px]" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default OurVideos