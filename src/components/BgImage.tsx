'use client'

import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"
import { BgImage } from "../assets"

export default function Bg() {
    const segment = useSelectedLayoutSegment()
    console.log(segment);
    

  // Home page → segment = null
  if (segment !== null) return null

    return (
        <Image
            src={BgImage}
            alt="Bg"
            className="w-full h-full md:hidden"
            priority
        />
    )
}
