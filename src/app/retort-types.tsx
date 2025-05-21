"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "https://surdry.com/wp-content/uploads/2023/06/production-retorts-static.jpg",
    desc: "Heats with high pressure water and steam",
    title: "Water Spray Retort",
    icon: undefined,
  },
  {
    img: "https://surdry.com/wp-content/uploads/2023/06/production-retorts-rotary.jpg",
    desc: "Hot water flows from top to bottom for uniform heating",
    title: "Water Cascading Retort",
    icon: undefined,
  },
  {
    img: "https://surdry.com/wp-content/uploads/2023/06/production-retorts-static.jpg",
    desc: "Fully submerges products in hot water",
    title: "Water Immersion Retort",
    icon: undefined,
  },
  {
    img: "https://surdry.com/wp-content/uploads/2023/06/production-retorts-rotary.jpg",
    desc: "Small-scale unit, perfect for testing and trials",
    title: "Pilot Retort",
    icon: undefined,
  },
];

export function RetortTypes() {
  return (
    <section className="container mx-auto px-8 py-24">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3 font-fugaz text-blu-1 tracking-wide" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
          ITECH PRIME RETORTS
        </Typography>
        <Typography variant="lead" className="!text-gray-1 lg:w-6/12 " placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
          Intelligent and Connected
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {CATEGORIES.map((props, key) => (
          <CategoryCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default RetortTypes;