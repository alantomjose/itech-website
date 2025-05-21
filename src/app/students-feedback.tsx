"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The instructors are top-notch, and the hands-on approach to learning is incredibly effective.",
    client: "Jessica Devis",
    title: "ABC Company",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "I went from knowing nothing about web development to landing my dream job as a frontend developer.",
    client: "Linde Michel",
    title: "ABC Company",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "The courses are structured well, and the projects helped me build a strong portfolio.",
    client: "Misha Stam",
    title: "ABC Company",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
            What Our Clients Say About Us
          </Typography>
          <Typography variant="lead" className="mb-10 max-w-3xl lg:text-center !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
            We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
