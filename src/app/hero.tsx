"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { heroImageLinks } from "../../utilites/links/hero_image_links";

function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[80vh] bg-[#111] flex flex-col justify-start lg:justify-center items-center overflow-hidden py-10 " >
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row   mt-24 lg:mt-0 lg:items-stretch ">
        {/* Text Content: Left on desktop, top on mobile */}
        <div className="flex-1 flex flex-col justify-center items-start w-full pl-4 lg:pl-0 lg:w-1/2 py-2 lg:pt-0">
          <Typography
            variant="h1"
            className="text-white font-bold text-3xl lg:text-5xl lg:text-5xl leading-tight mb-6 drop-shadow-lg text-left"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            Your Partner in Safe and Reliable Food Processing
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-200 text-lg lg:text-xl mb-8 max-w-xl drop-shadow text-left w-5/6"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            We build robust, high-performance retort sterilizers trusted by the food industry for consistent thermal processing and uncompromising reliability.
          </Typography>
          <Button
            color="gray"
            className="bg-blu-1 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-200  text-md lg:text-lg"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
            onClick={() => {
              const el = document.getElementById('contact-us');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACT US
          </Button>
        </div>
        {/* Image Grid: Right on desktop, below on mobile */}
        <div className="hidden lg:block flex-1 relative h-full w-full">
          <div className="absolute left-0 top-1/2  grid grid-cols-3 gap-6 w-[45vw] translate-x-[14%] ">
            <div className="flex flex-col gap-8 translate-y-[-20%]">
              <Image src={heroImageLinks[3].image} alt={heroImageLinks[0].alt} width={400} height={300} className="object-cover rounded-sm h-[22vh] w-full shadow-lg" />
              <Image src={heroImageLinks[2].image} alt={heroImageLinks[1].alt} width={400} height={300} className="object-cover rounded-sm h-[52vh] w-full shadow-lg" />
            </div>
            <div className="flex flex-col gap-8 translate-y-[-30%]">
              <Image src={heroImageLinks[0].image} alt={heroImageLinks[3].alt} width={400} height={300} className="object-cover rounded-sm h-40 w-full shadow-lg" />
              <Image src={heroImageLinks[1].image} alt={heroImageLinks[2].alt} width={400} height={300} className="object-cover rounded-sm h-[53vh] w-full shadow-lg" />
            </div>
            <div className="flex flex-col gap-8 translate-y-[-40%]">
              <Image src={heroImageLinks[4].image} alt={heroImageLinks[4].alt} width={400} height={300} className="object-cover rounded-sm h-[36vh] w-full shadow-lg" />
              <Image src={heroImageLinks[5].image} alt={heroImageLinks[5].alt} width={400} height={300} className="object-cover rounded-sm h-[42vh] w-full shadow-lg" />
            </div>
          </div>
        </div>
        {/* Mobile: Only 2nd image below text */}
        <div className="lg:hidden block relative h-full w-full mt-10">
        <div className="absolute left-0 top-1/2  grid grid-cols-2 gap-4 w-full px-4 ">
            <div className="flex flex-col gap-4 ">
              <Image src={heroImageLinks[1].image} alt={heroImageLinks[1].alt} width={400} height={300} className="object-cover rounded-sm  h-[36vh w-full shadow-lg" />
              {/* <Image src={heroImageLinks[2].image} alt={heroImageLinks[1].alt} width={400} height={300} className="object-cover rounded-sm h-[52vh] w-full shadow-lg" /> */}
            </div>
            <div className="flex flex-col gap-4 translate-y-[4%] ">
              <Image src={heroImageLinks[0].image} alt={heroImageLinks[3].alt} width={400} height={300} className="object-cover rounded-sm  h-[14vh] w-full shadow-lg" />
              <Image src={heroImageLinks[5].image} alt={heroImageLinks[2].alt} width={400} height={300} className="object-cover rounded-sm h-[53vh] w-full shadow-lg" />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
