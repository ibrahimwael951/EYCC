import {
  ChartColumn,
  CodeXml,
  GitPullRequestArrow,
  GlobeLock,
  RotateCcw,
} from "lucide-react";

export const Categories_Challenges = [
  {
    icon: CodeXml,
    title: "Web Exploitation",
    desc: "Every time you log in to a website or fill out a form, you're using web applications. But what happens if a website forgets to check itsinput properly?",
    WhatULearn:
      "In Web Exploitation, you’ll learn how attackers trick websites using some techniques",
    Links: {
      p1: "This YouTube Playlist covers more than web vulnerabilities, it is the most recommended",
      link1:
        "https://www.youtube.com/playlist?list=PLv7cogHXoVhXvHPzIl1dWtBiYUAL8baHj",
      p2: "PortSwigger hands-on labs for practical learning for each web vulnerability with explanation of topics for each one:",
      link2: "https://portswigger.net/web-security/dashboard",
      p3: "Labs of (Web for Pentester I & II) in pentesterlab covers almost all the web vulnerabilities even the advanced ones: ",
      link3: "https://pentesterlab.com/my/progress#offlinefree",
      forTools: {
        p: "Burpsuite is the main tool for web exploitation, as it intercepts and analyzes web requests",
        p2: "Download link:",
        link: "https://portswigger.net/burp/communitydownload",
        p3: "(it is downloaded by default in kali linux) ",
      },
    },
  },
  {
    icon: GlobeLock,
    title: "Cryptography",
    desc: "Imagine sending a secret message no one else can read. That's the power of cryptography",
    WhatULearn:
      "In Challenges, you'll break ciphers, decode hidden messages, and more",
  },
  {
    icon: GitPullRequestArrow,
    title: "OSINT",
    desc: "Sometimes, the most powerful hacking tool is just… Google. OSINT challenges are about finding hidden information using only public sources",
    WhatULearn:
      "You'll learn to think like a digital detective — uncovering usernames, email trails, or leaked files without touching a line of code",
  },
  {
    icon: ChartColumn,
    title: "Forensics",
    desc: "Something is hidden inside a file, an image, or a network capture — can you find it?",
    WhatULearn:
      "Forensics challenges give you digital files to analyze photos with hidden data or files hiding clues",
  },
  {
    icon: RotateCcw,
    title: "Reverse Engineering",
    desc: "Ever wonder what a program is really doing behind the scenes?",
    WhatULearn:
      "In Reverse Engineering, you’ll take apart small programs (like .exe or .py files) to figure out how they work, what secrets they hold, or how to trick them.",
  },
];
