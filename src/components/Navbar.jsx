import { useState } from "react";
import sections from "../data/sections.json";
import HamButton from "./HamButton";

function PhotoButton() {
  return (
    <a
      href="http://photo.rileypaul.ca"
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 h-9 flex shadow items-center border-2 rounded header-link border-gray-50 bg-white text-black hover:invert font-photo font-light"
    >
      <img src="/photo-logo.svg" alt="Photography Logo" className="h-6" />
      <span className="hidden lg:block">Photography</span>
    </a>
  );
}

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img src="/logo.svg" alt="logo" className="h-14" />
            </a>
            <div className="flex flex-row gap-2">
              <PhotoButton />
              <HamButton navbar={navbar} setNavbar={setNavbar} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {sections.map((section) => (
                <li
                  className="text-gray-600 hover:text-blue-600"
                  key={section.name}
                  onClick={() => setNavbar(false)}
                >
                  <a href={section.link}>{section.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
