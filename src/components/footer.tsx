import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Blog"],
  },

];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      onResize={() => {}}
                      onResizeCapture={() => {}}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              FORSQUARE CORPORATION PVT LTD.
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              Forsquare Retorts is a leading manufacturer of retort sterilizers and other food processing equipment.
            </Typography>
            
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onResize={() => {}}
          onResizeCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} Forsquare Retorts. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
