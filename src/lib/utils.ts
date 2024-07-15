import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Pages } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function determinePage(pathname: string): Pages {
  switch (pathname.toLowerCase()) {
    case "/about":
      return Pages.About;
    case "/my-services":
      return Pages.MyServices;
    case "/my-cv":
      return Pages.MyCv;
    case "/my-work":
      return Pages.MyWork;
    case "/contact":
      return Pages.Contact;
    default:
      return Pages.Home;
  }
}
