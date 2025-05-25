"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUs from "@/app/ContactUs";
import { Button } from "@material-tailwind/react";
import Footer from "@/components/footer";

const SIDEBAR_LINKS = [
  { name: "Home", href: "/" },
  { name: "Steam Water Spray", href: "/retorts/steamWaterSpray" },
  { name: "Water Cascading", href: "/retorts/waterCascading" },
  { name: "Water Immersion", href: "/retorts/waterImmersion" },
  { name: "Pilot Retort", href: "/retorts/pilotRetort" },
];

interface SideBarLayoutProps {
  children: React.ReactNode;
}

export default function SideBarLayout({ children }: SideBarLayoutProps) {
  const pathname = usePathname();
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Main content */}
        <main className="flex-1 p-4 lg:pr-0 max-w-full">{children}</main>
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-64  lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <nav>
            <h2 className="text-lg font-bold mb-4 text-gray-700 mt-20">Quick Links</h2>
            <ul className="space-y-3">
              {SIDEBAR_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={` cursor-pointer block px-3 py-2 rounded transition-colors text-gray-700 hover:text-blu-1 ${isActive ? "text-blue-800 " : ""}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button
            color="gray"
            className="mt-6 cursor-pointer border-2 border-blu-1 hover:bg-blue-50 text-gray-blu-1 bg-white font-semibold rounded-full px-6 py-3 shadow-lg transition-all duration-200 "
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
            onClick={() => {
              const el = document.getElementById('contact-us');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACT US
          </Button>
          </nav>
        </aside>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

