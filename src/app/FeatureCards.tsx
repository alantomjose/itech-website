"use client"
import React from "react";
import Image from "next/image";
import {
  ChartBarIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

const FEATURES = [
  {
    icon: ChartBarIcon,
    title: "FDA Compliant Retort Systems",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "AMC and Exceptional On Site Service",
  },
  {
    icon: SparklesIcon,
    title: "Cloud Based Monitoring Systems",
  },
  {
    icon: CubeIcon,
    title: "Automation Solutions",
  },
];

export function FeatureCards() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/image/retortbackground.jpeg"
          alt="Retort Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 flex flex-col items-center">
        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURES.map(({ icon: Icon, title }, idx) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center bg-blu-1 rounded-xl shadow-lg py-12 px-6 transition-transform hover:scale-105 duration-500 cursor-pointer min-h-[240px]"
            >
              <Icon className="h-16 w-16 text-white mb-6" />
              <span className="text-2xl font-semibold text-white text-center">
                {title}
              </span>
            </div>
          ))}
        </div>

        {/* Headings */}
        <h1 className="text-5xl font-bold text-white text-center mb-10 drop-shadow-lg font-fugaz uppercase">
          How can we help you?
        </h1>


        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-8 w-full   max-w-md justify-center">
          <button className="flex-1 bg-blu-1 hover:bg-blu-2 text-white py-4 px-8 rounded-full text-lg font-bold transition-all duration-300 tracking-wider">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
