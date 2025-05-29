"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

function FeatureCard({
  title,
  description,
  image,
  link,
  buttonText,
  orinetLeft,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  orinetLeft: boolean;
}) {
  console.log(orinetLeft);
  return (
    <div
      className={`flex flex-col lg:flex-row gap-2 lg:gap-12 items-center mb-24 ${
        orinetLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <div className="flex gap-3">
            <div className="w-2 bg-blu-1" />
            <Typography
              variant="h2"
              className="text-4xl font-bold flex items-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              onResize={() => {}}
              onResizeCapture={() => {}}
            >
              <span className="text-gray-800">{title}</span>
            </Typography>
          </div>
        </div>

        <Typography
          variant="paragraph"
          className="text-gray-700 text-lg"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          {description}
        </Typography>
        <Link href={link}>
          <button
            // className=" transition-all duration-300 flex items-center gap-2 bg-blu-1 hover:bg-blu-2 rounded-full mt-4"
            className="mt-4 cursor-pointer border-2 border-blu-1 hover:bg-blu-1 hover:text-white text-gray-blu-1 bg-white  rounded-full px-6 py-2 shadow-lg transition-all duration-200 "
          >
            {buttonText}
          </button>
        </Link>
      </div>

      <div className="w-full lg:max-w-[40%] flex justify-center items-center">
        <div className="overflow-hidden relative">
          <Image
            src={image}
            alt="Surdry Continuous Sterilizer"
            className="object-cover object-center"
            width={500}
            height={500}
          />
          <div className="absolute inset-0  transition-opacity duration-300 group-hover:opacity-0" />
        </div>
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
        image="https://itech-website-2.s3.ap-south-1.amazonaws.com/website/website_images/retort_img.png"
        link="/articles/automatedRetorts"
        buttonText="More on the our Smart Retort Systems"
        orinetLeft={false}
      />
      <FeatureCard
        title="Built to Meet Global Compliance Including US FDA"
        description="Our retorts are designed to meet all major regulatory standards, including full compliance with USFDA and international food safety norms."
        image="https://itech-website-2.s3.ap-south-1.amazonaws.com/website/website_images/fda comliant.png"
        link="/articles/builtToMeetCompliance"
        buttonText="Why Compliance Matters"
        orinetLeft={true}
      />
      <FeatureCard
        title="With Advanced Sensors for Precise Heat Penetration Measurements"
        description="Our retorts are equipped with advanced thermocouple probes for monitoring heat penetration data of the core of the product. These probes ensure that every batch is safe and consistent."
        image="https://itech-website-2.s3.ap-south-1.amazonaws.com/website/website_images/probes_fittings.png"
        link="/articles/PreciseHeatPenetration"
        buttonText="Precise Heat Penetration Monitoring"
        orinetLeft={false}
      />
    </section>
  );
}

export default RetortFeatures;
