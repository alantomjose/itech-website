"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import Image from "next/image";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

function FeatureCard({title, description, image,link, buttonText, orinetLeft} : {title: string, description: string, image: string, link: string, buttonText: string, orinetLeft: boolean}) {
  console.log(orinetLeft);
  return (
    <div className={`flex flex-col lg:flex-row gap-2 lg:gap-12 items-center mb-24 ${orinetLeft ? "lg:flex-row-reverse" : ""}`}>
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <Typography variant="h2" className="text-4xl font-bold" placeholder="">
              <span className="text-gray-1 border-b-4 border-blu-1">{title}</span>
            </Typography>
          </div>
          
          <Typography variant="paragraph" className="text-gray-700 text-lg" placeholder="">
          {description}

          </Typography>

          <Button
            size="lg"
            color="blue"
            className=" transition-all duration-300 flex items-center gap-2 bg-blu-1 hover:bg-blu-2 rounded-full"
            placeholder=""
          >
            {buttonText}
          </Button>
        </div>

        <div className=" bg-red-50 w-full lg:max-w-[40%]">
          <Card className="w-full overflow-hidden shadow-lg" placeholder="">
            <CardBody className="relative w-full aspect-[16/9]" placeholder="">
              <Image
                src={image}
                alt="Surdry Continuous Sterilizer"
                fill
                className="object-cover object-center"
                priority
                sizes=""
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
            </CardBody>
          </Card>
        </div>
      </div>
  );
}
export function RetortFeatures() {
  return (
    <section className="container mx-auto px-8 py-24">
      <FeatureCard 
      title="Smart, Fully Automated and Cloud Connected Retort Systems" 
      description="Experience unmatched efficiency with our fully automated retorts, designed for precision control, minimal human intervention, and consistent processing every cycle.
      Monitor and control your retort operations from anywhere, anytime with our cloud-based platform."
      image="https://itechsteri.com/wp-content/uploads/2020/08/Horizantal-WIR.jpg"
      link="/"
      buttonText="More on the our Automation System"
      orinetLeft={false}
      />
      <FeatureCard 
      title="Built to Meet Global Compliance Including US FDA" 
      description="Our retorts are designed to meet all major regulatory standards, including full compliance with USFDA and international food safety norms."
      image="https://itechsteri.com/wp-content/uploads/2020/08/Horizantal-WIR.jpg"
      link="/"
      buttonText="More Retort Details"
      orinetLeft={true}
      />
      <FeatureCard 
      title="With Advanced Sensors for Precise Heat Penetration Measurements" 
      description="Our retorts are equipped with advanced thermocouple probes for monitoring heat penetration data of the core of the product. These probes ensure that every batch is safe and consistent."
      image="https://itechsteri.com/wp-content/uploads/2020/08/Horizantal-WIR.jpg"
      link="/"
      buttonText="Ellab Thermocouple porbes"
      />
    </section>
  );
}

export default RetortFeatures;