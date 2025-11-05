import {
  AtSign,
  Github,
  Linkedin,
  Youtube,
  type LucideIcon,
} from "lucide-react";

type ContactMethod = {
  name: string;
  link: string;
  Icon: LucideIcon;
};
export const contactMethods: ContactMethod[] = [
  {
    name: "Email",
    link: "mailto:rileypaul96@gmail.com",
    Icon: AtSign,
  },
  {
    name: "Github",
    link: "https://github.com/riley-paul",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riley-paul-b84352106",
    Icon: Linkedin,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCt3RczuBzIindDG5I8JW45A",
    Icon: Youtube,
  },
];
