import React from "react";
import { Home, Mail, Youtube, Linkedin, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "../lib/utils";
import { Dock, DockIcon } from "./magicui/dock";

const Icons = {
  home: Home,
  email: Mail,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
};

const DATA = {
  navbar: [
    { href: "#hero", icon: Icons.home, label: "Home" },
  ],
  contact: {
    social: {
      YouTube: {
        name: "YouTube",
        url: "#hero",
        icon: Icons.youtube,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#hero",
        icon: Icons.linkedin,
      },
      GitHub: {
        name: "GitHub",
        url: "#hero",
        icon: Icons.github,
      },
      Email: {
        name: "Send Email",
        url: "#hero",
        icon: Icons.email,
      },
    },
  },
};

export function DockDemo() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle" className="bg-slate-800/80 border-slate-600">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-white hover:bg-slate-700",
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-slate-600" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-white hover:bg-slate-700",
                    )}
                  >
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}