import React from "react";
import Image from "next/image";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType | undefined;
}

function CategoryCard({ img, title, desc, icon: Icon }: CategoryCardProps) {
  return (
    // @ts-ignore
    <Card className="group relative grid min-h-[24rem] w-full overflow-hidden rounded-sm">
      <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 h-full w-full bg-black/40" />
      {/* @ts-ignore */}
      <CardBody className="relative flex flex-col justify-end">
        <div>
          {/* @ts-ignore */}
          <Typography variant="h5" className="mb-1 text-xl font-extrabold " color="white">
            {title}
          </Typography>
          {/* @ts-ignore */}
          <Typography color="white" className="text-md font-bold  text-gray-200 ">
            {desc}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
export default CategoryCard;
