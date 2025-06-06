import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  tag?: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card
      className="border"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onResize={() => {}}
      onResizeCapture={() => {}}
    >
      <CardHeader
        className="h-64"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onResize={() => {}}
        onResizeCapture={() => {}}
      >
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover scale-[1.1]" />
      </CardHeader>
      <CardBody
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onResize={() => {}}
        onResizeCapture={() => {}}
      >
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            {tag}
          </Typography>
        </div>
        <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-900">
          <Typography
            variant="h5"
            className="mb-2 normal-case"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            {title}
          </Typography>
        </a>
        <Typography
          className="mb-6 font-normal !text-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          {desc}
        </Typography>
        <Button
          variant="outlined"
          className="rounded-full hover:border-blu-1 hover:text-blu-1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          {label}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
