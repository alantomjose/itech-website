import React from "react";

const stats = [
  {
    value: "20+",
    label: "Years of Experience",
  },
  {
    value: "100+",
    label: "Happy Customers",
  },
  {
    value: "300+",
    label: "Retorts in Operation",
  },
];

export default function Stats() {
  return (
    <section className="w-full pt-12 bg-white ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-1">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-bold mb-2 ">{stat.value}</div>
              <div className="text-2xl font-thin ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 