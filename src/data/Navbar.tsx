import {
  LucideIcon,
  Scale,
  User,
  Swords,
  Database,
  ShieldQuestionMark,
  Home,
} from "lucide-react";

interface NavData {
  title: string;
  href: string;
  icon: LucideIcon;
}
interface Social {
  title: string;
  Link: string;
  icon: string ;
}


export const navData: NavData[] = [
  { title: "Home ", href: "/ ", icon: Home },
  { title: "About ", href: "/About ", icon: User },
  { title: "FAQs", href: "/faq", icon: ShieldQuestionMark },
  { title: "Format", href: "/Rules", icon: Scale },
  { title: "Challenges ", href: "/Challenges ", icon: Swords },
  { title: "Resources  ", href: "/Resources ", icon: Database },
];
export const Social_Links:Social[] = [
  {
    title: "WhatsApp Channel",
    Link: "https://whatsapp.com/channel/0029Vb5tjbOIyPtNoIxKIb2a",
    icon: "/whatsapp.png",
  },
  {
    title: "Discord Server",
    Link: "https://discord.gg/YBFUZyqt",
    icon: "/discord.png",
  },
  {
    title: "Telegram Channel",
    Link: "https://t.me/+gSyG_91EYYY1YjU0",
    icon: "/telegram.png",
  },
];
