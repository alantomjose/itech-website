"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Stats from "./Stats";

function Hero() {
  return (
    <>
    
    <div className="!flex h-[70vh] lg:h-[75vh] w-full items-center justify-between px-10 mb-10">
      <Image
        width={1200}
        height={1200}
        src="/image/hero_bg.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto lg:w-[52vw] h-[72vh] rounded-bl-[100px] object-cover object-center w-full"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 text-center lg:text-left mt-14 c">
          <Card className="col-span-full rounded-xl text-gray-1 border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-4xl !leading-snug text-3xl lg:max-w-3xl "
            >
              Your Partner in Safe and Reliable Food Processing
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 text-blue-gray-800 text-md lg:text-xl">
            We build robust, high-performance retort sterilizers trusted by the food industry for consistent thermal processing and uncompromising reliability.
              
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start ">
              <Button color="gray" className=" bg-blu-1 rounded-full">CONTACT US</Button>

            </div>
            
          </Card>
        </div>
      </div>
    </div>
    <Stats />
    </>
  );
}
export default Hero;
