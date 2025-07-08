import { BugOff, LucideIcon, Settings, User } from "lucide-react";

interface NavData {
  title: string;
  href: string;
  icon: LucideIcon;
}  

export const navData: NavData[] = [
  { title: "About ", href: "/About ", icon: User },
  { title: "FAQs ", href: "/FAQs ", icon: Settings },
  { title: "Rules", href: "/Rules", icon: BugOff },
  { title: "Challenges ", href: "/Challenges ", icon: BugOff },
  { title: "Resources  ", href: "/Resources ", icon: BugOff },
   
];
