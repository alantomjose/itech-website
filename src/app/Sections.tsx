"use client";

import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import Image from "next/image";

import {
  ChartBarIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const CATEGORIES = [
  {
    icon: ChartBarIcon,
    title: "Control systems",
    link: "/control-systems",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Parts & service",
    link: "/parts-service",
  },
  {
    icon: SparklesIcon,
    title: "Sustainability",
    link: "/sustainability",
  },
  {
    icon: CubeIcon,
    title: "Handling automation",
    link: "/handling-automation",
  },
];

function ServiceCard({ icon: Icon, title, link }: { icon: any; title: string; link: string }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    // @ts-ignore
    <Card className="group cursor-pointer hover:bg-red-50 transition-all duration-300 aspect-square" onClick={handleClick}>
      {/* @ts-ignore */}
      <CardBody className="flex flex-col items-center justify-center h-full">
        <Icon className="h-16 w-16 text-red-500 mb-4" />
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-center">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function Sections() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/@retortbackground.jpeg"
          alt="Retort Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8 py-24">
        <div className="mb-20 grid place-items-center text-center">
          {/* @ts-ignore */}
          <Typography variant="h1" className="text-5xl mb-4 text-white">
            How can we help you?
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="lead" className="text-2xl text-white/80">
            Surdry Food Sterilizers
          </Typography>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CATEGORIES.map((props, key) => (
            <ServiceCard key={key} {...props} />
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            className="bg-red-500 hover:bg-red-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300"
            onClick={() => window.location.href = '/contact-spain'}
          >
            Contact Spain
          </button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300"
            onClick={() => window.location.href = '/contact-north-america'}
          >
            Contact North America
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sections; 