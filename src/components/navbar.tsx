import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  Cog8ToothIcon,
  CogIcon
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "RETORTS",
    href: "/",
  },
  {
    name: "AUTOMATION",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      {/* @ts-ignore */}
      <Typography
        as="a"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-800"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 z-50 fixed w-full ">
      <div className="mx-auto container">
        {/* @ts-ignore */}
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6 "
        >
          <div className="flex items-center justify-between pr-6">
            {/* @ts-ignore */}
            <Typography color="blue-gray"  className="text-xl italic font-fugaz text-blu-1 tracking-wide">
              ITECH EQUIPMENTS
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex tracking-wider text-gray-1">
              {NAV_MENU.map(({ name,  href }) => (
                <NavItem key={name} href={href}>
                  {name}
                </NavItem>
              ))}
            </ul>

            {/* @ts-ignore */}
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, href }) => (
                  <NavItem key={name} href={href}>
                    {name}
                  </NavItem>
                ))}
              </ul>
              
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
