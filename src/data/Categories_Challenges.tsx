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
