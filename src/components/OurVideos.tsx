"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRef, useState } from "react";

const youtubeVideoUrl = [
    { id: 1, url: "https://youtube.com/shorts/QrghdsetDNc?si=UAsuufDC4laaTLE1" },
    { id: 2, url: "https://youtu.be/0SD_Mts-oUE?si=x4VxPBX3y7VHVna5" },
    { id: 3, url: "https://youtu.be/-9X9dVfGAFA?si=UU6JCzKbdLDI7F2s" },
    { id: 4, url: "https://youtu.be/izCVODLcC9k?si=SW5_1_irY_5QEGc5" },
]

const OurVideos = () => {
    const { t } = useLanguage();
    const playersRef = useRef<Record<number, any>>({});
    // Mobil uchun qaysi video aktivligini bilish (surishga xalaqit bermaslik uchun)
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        draggable: true,
        // Slayder surilganda videoni pauza qilish yoki pointer-eventsni qaytarish uchun
        beforeChange: () => setActiveVideo(null),
    };

    const onReady = (id: number) => (event: any) => {
        playersRef.current[id] = event.target;
    };

    const onPlay = (id: number) => () => {
        // Siz yozgan mantiq: bittasi chalinsa, qolganlarini pauza qilish
        Object.entries(playersRef.current).forEach(([key, player]) => {
            if (Number(key) !== id) {
                player.pauseVideo();
            }
        });
    };

    const onStateChange = (id: number) => (event: any) => {
  if (event.data === 1) {
    // PLAYING
    setActiveVideo(id);

    // boshqa videolarni pauza
    Object.entries(playersRef.current).forEach(([key, player]) => {
      if (Number(key) !== id) {
        player.pauseVideo();
      }
    });
  }

  if (event.data === 2 || event.data === 0) {
    // PAUSED yoki ENDED
    setActiveVideo(null);
  }
};

    const getVideoId = (url: string) => {
        if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
        if (url.includes("shorts/")) return url.split("shorts/")[1].split("?")[0];
        if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
        return "";
    };

    const opts: YouTubeProps['opts'] = {
        width: "100%",
        height: "100%",
        playerVars: {
            mute: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
        },
    };

    return (
        <div className="container-wide py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-center">{t.products.title2}</h2>

            <div className="lg:hidden">
                <Slider {...settings}>
                    {youtubeVideoUrl.map((item) => (
                        <div key={item.id} className="px-2">
                            <div
                                className="relative w-full h-[400px] overflow-hidden rounded-xl bg-black"
                                onClick={() => setActiveVideo(item.id)}
                            >
                                {/* Agar video aktiv bo'lmasa, pointer-eventsni o'chiramiz.
                                   Bu slayderni bemalol surish imkonini beradi.
                                */}
                                <div className={`w-full h-full ${activeVideo !== item.id ? "pointer-events-none" : "pointer-events-auto"}`}>
                                    <YouTube
                                        videoId={getVideoId(item.url)}
                                        opts={opts}
                                        onReady={onReady(item.id)}
                                        onStateChange={onStateChange(item.id)}
                                        className="w-full h-full"
                                        containerClassName="youtube-container"
                                    />
                                </div>
                            </div>
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
                        <YouTube
                            videoId={getVideoId(item.url)}
                            opts={opts}
                            onReady={onReady(item.id)}
                            onPlay={onPlay(item.id)}
                            className="w-full h-[300px]"
                        />
                    </motion.div>
                ))}
            </div>

            <style jsx global>{`
                .youtube-container {
                    width: 100%;
                    height: 100%;
                }
                .slick-track {
                    display: flex !important;
                }
            `}</style>
        </div>
    )
}

export default OurVideos;