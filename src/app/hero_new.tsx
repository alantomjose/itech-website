"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Stats from "./Stats";

function Hero() {
  return (
    <>
    <div className="relative w-full flex items-center justify-center h-screen lg:h-[75vh] bg-red-200">
      <div className="absolute inset-0 w-full h-full">
        <Image
          fill
          src="/image/HEROBG.jpg"
          alt="bg-img"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl  ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-center text-4xl md:text-4xl lg:text-5xl text-white font-bold"
          >
            Your Partner in Safe and Reliable Food Processing
          </Typography>
          <Typography variant="lead" className="mt-6 text-center text-blue-200 text-xl">
          We build robust, high-performance retort sterilizers trusted by the food industry for consistent thermal processing and uncompromising reliability.
          </Typography>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 ">
            <Button color="black"  className="rounded-full bg-blue-400" size="lg">Contact Us</Button>
            
          </div>
        </div>
      </div>
    </div>
    <Stats />
    </>
  );
}
export default Hero;
