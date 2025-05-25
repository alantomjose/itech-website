"use client";

import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, UserIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Input, Textarea } from "@material-tailwind/react";

export default function ContactUs() {
  return (
    <div id="contact-us" className="contact-container w-full max-w-5xl mx-auto rounded-md overflow-hidden shadow-2xl flex flex-col-reverse md:flex-row bg-white border border-gray-200 md:p-0 p-2">
      {/* Left: Contact Info */}
      <div className="contact-info flex-1 bg-blu-1 text-white p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Let&apos;s get in touch</h2>
        <p className="mb-8 text-lg opacity-90">Reach out to us for any inquiries.</p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <PhoneIcon className="h-6 w-6 text-white flex-shrink-0" />
            <div>
              <div>+91 1234123412</div>
              <div>+91 1234123412</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="h-6 w-6 text-white flex-shrink-0" />
            <div>
              <div>info@itech.com</div>
              <div>sales@itech.com</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-6 w-6 text-white flex-shrink-0" />
            <div>
              600 Congress Ave,<br />Floor 14<br />Austin, TX 78701
            </div>
          </div>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="contact-form flex-1 bg-white p-6 md:p-10 flex flex-col justify-center">
        <div className="text-2xl font-bold mb-2 text-blu-1">Contact Us</div>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="contact-name" className="sr-only">Full Name</label>
            <div className="flex items-center gap-3">
              <UserIcon className="h-5 w-5 text-blu-1" />
              <Input
                id="contact-name"
                label="Full Name"
                color="blue"
                crossOrigin="anonymous"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">Email</label>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-blu-1" />
              <Input
                id="contact-email"
                label="Email"
                color="blue"
                type="email"
                crossOrigin="anonymous"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <div className="flex items-start gap-3">
              <PencilSquareIcon className="h-5 w-5 text-blu-1 mt-2" />
              <Textarea
                id="contact-message"
                label="Message"
                color="blue"
                rows={4}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              />
            </div>
          </div>
          <button type="submit" className=" w-1/2 mt-2 bg-blu-1 hover:bg-blu-2 text-white font-bold py-3 rounded-full text-lg shadow transition-all flex items-center justify-center gap-2">
            Send Message
            <span className="ml-1">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}