import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card shadow={false} className="items-start text-left" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
      <CardBody placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
        <Avatar src={img} className="mb-2" alt={client} size="xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}} />
        <Typography variant="h6" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
          {client}
        </Typography>
        <Typography variant="small" color="blue-gray" className="mt-1 mb-5 block font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
          {title}
        </Typography>
        <Typography variant="paragraph" className="mb-6 font-normal text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;