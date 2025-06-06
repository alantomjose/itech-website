import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false} className="items-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
      <Icon className="h-7 w-7 text-gray-900" />
      <Typography variant="h1" color="blue-gray" className="mb-2 mt-4 text-5xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
        {count}
      </Typography>
      <Typography variant="h6" className="mb-2 font-normal text-blue-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
