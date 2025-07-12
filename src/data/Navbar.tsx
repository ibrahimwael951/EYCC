import {
  LucideIcon,
  Scale,
  User,
  Swords,
  Database,
  ShieldQuestionMark,
} from "lucide-react";

interface NavData { 
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navData: NavData[] = [
  { title: "About ", href: "/About ", icon: User },
  { title: "FAQs", href: "/faq", icon: ShieldQuestionMark },
  { title: "Format & Rules", href: "/Rules", icon: Scale },
  { title: "Challenges ", href: "/Challenges ", icon: Swords },
  { title: "Resources  ", href: "/Resources ", icon: Database },
];
