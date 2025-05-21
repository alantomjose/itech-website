"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog5.svg",
    // tag: "Beginner • 35 Classes • 400 Students",
    title: "Differnt Retort Types: Advantages and Disadvantages",
    label: "Learn More",
    desc: "Read more about steam water spray retorts, water cascading retorts, water immersion retorts etc. and find out which one is best for your application.",
  },
  {
    img: "/image/blogs/blog6.svg",
    // tag: "Medium • 10 Classes • 150 Students",
    title: "How to choose the right retort for your application?",
    label: "Learn More",
    desc: "Eachn retort should be chosen based on your product type, container type, container size, application, etc. Learn more about it here.",
  },
  {
    img: "/image/blogs/blog4.svg",
    // tag: "Medium • 33 Classes • 690 Students",
    title: "Retort Performance and Qualification Studies",
    label: "Learn More",
    desc: "Irrespective of the retort type or brand, the performance and qualification studies are must to ensure the retort is working as per the requirement.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Learn More About Retort Sterilization
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Go thorough our informative blogs to learn more about retort sterilization process and working.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
