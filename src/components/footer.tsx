import { IconButton, Link } from "@radix-ui/themes";
import { contactMethods } from "@/lib/config";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="py-6 flex flex-col justify-center items-center gap-2"
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {contactMethods.map((c) => (
          <IconButton asChild variant="outline">
            <a href={c.link} target="_blank">
              <c.Icon className="h-4 w-4" />
            </a>
          </IconButton>
        ))}
      </div>
      <div className="flex gap-2">
        <Link
          size="2"
          color="gray"
          href="/Resume - Riley Paul.pdf"
          title="Download resume as PDF"
        >
          Resume.pdf
        </Link>
        •
        <Link
          size="2"
          color="gray"
          href="https://photo.rileypaul.ca"
          title="Photography Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photography
        </Link>
      </div>
      <span className="opacity-50 text-sm">
        &copy <span>{new Date().getFullYear()}</span> Riley Paul
      </span>
    </footer>
  );
};

export default Footer;
