import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType | undefined;
  link: string;
}

function CategoryCard({ img, title, desc, icon: Icon, link }: CategoryCardProps) {
  return (
      <Card
        className="group relative grid min-h-[24rem] w-full overflow-hidden rounded-sm cursor-pointer"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onResize={() => {}}
        onResizeCapture={() => {}}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 h-full w-full bg-black/40" />
        <CardBody
          className="relative flex flex-col justify-end"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          <div>
            <Typography
              variant="h5"
              className="mb-1 text-xl font-extrabold "
              color="white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              onResize={() => {}}
              onResizeCapture={() => {}}
            >
              {title}
            </Typography>
            <Typography
              color="white"
              className="text-md font-bold  text-gray-200 "
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              onResize={() => {}}
              onResizeCapture={() => {}}
            >
              {desc}
            </Typography>
          </div>
        </CardBody>
      </Card>
  );
}
export default CategoryCard;
