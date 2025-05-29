"use client";

import { Button, Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const BLOGS = [
  {
    img: "/image/blogs/blog4.svg",
    // tag: "Beginner • 25 Classes • 200 Students",
    title: "Find the Right Retort System for Your Product and Container Type",
    label: "Read More",
    desc: "Choosing the correct retort system is critical to achieving safe, high-quality, and shelf-stable products. This blog helps you match your product type—whether it's ready meals, sauces, beverages, or dairy—with the right retort technology",
  },
  {
    img: "/image/blogs/blog3.svg",
    // tag: "Medium • 10 Classes • 150 Students",
    title: "How To Perform Proper Heat Penetration Testing",
    label: "Read More",
    desc: "Heat penetration testing is the foundation of a validated, FDA-compliant retort process. This guide walks you through the step-by-step procedure for conducting accurate heat penetration studies using thermocouples and cold spot measurement. ",
  },
  {
    img: "/image/blogs/blog2.svg",
    // tag: "Medium • 23 Classes • 590 Students",
    title: "Guide on Reort Processing of Coconut Milk",
    label: "Read More",
    desc: "Coconut milk presents unique challenges in retort processing due to its high fat content and tendency to separate or curdle under heat. In this blog, we explore best practices for achieving microbial stability without compromising texture, flavor, or appearance.",
  },
];

export function Blogs() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-24 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          Learn More About Retort Technology
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          As a retort processor, poper understanding of the technology is of utmost importance.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {BLOGS.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
      <div className="container mx-auto text-center mt-10">
        <Button
          variant="outlined"
          className="rounded-full hover:border-blu-1 hover:text-blu-1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          More Articles
        </Button>
      </div>
    </section>
  );
}

export default Blogs;
