import { Button } from "@radix-ui/themes";
import { cn } from "@/lib/utils";
import React from "react";

interface Link {
  name: string;
  href: string;
  active: (pathname: string) => boolean;
}

const NavLink: React.FC<{ link: Link; pathname: string }> = ({
  link,
  pathname,
}) => (
  <a
    href={link.href}
    className={cn(
      "flex items-center justify-center font-bold text-3 rounded-3 px-6 py-2 border-accent-10 border-2 bg-accent-3",
      link.active(pathname) && "bg-accent-10 text-accent-1 flex-1 font-medium"
    )}
  >
    {link.name}
  </a>
);

const links: Link[] = [
  {
    name: "Projects",
    href: "/",
    active: (pathname: string) =>
      pathname.startsWith("/projects") || pathname === "/",
  },
  {
    name: "Resume",
    href: "/resume",
    active: (pathname: string) => pathname.startsWith("/resume"),
  },
];

const NavBar: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <div className="pb-8 pt-4 w-full sticky top-0 z-50 bg-gradient-to-b from-accent-1">
      <div className="container2 flex gap-4 justify-between">
        {links.map((link) => (
          <NavLink key={link.href} link={link} pathname={pathname} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
