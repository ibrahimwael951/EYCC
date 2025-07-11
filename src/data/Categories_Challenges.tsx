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
    What_you_will_encounter:
      "Login bypass, cookie manipulation, gaining access to other users' accounts, parameter tampering, and more.",
    Online_Round: 4,
  },
  {
    icon: GlobeLock,
    title: "Cryptography",
    desc: "Imagine sending a secret message no one else can read. That's the power of cryptography",
    WhatULearn:
      "In Challenges, you'll break ciphers, decode hidden messages, and more",
    What_you_will_encounter:
      "Break ciphers (Caesar, XOR, etc.), decrypt messages, reverse encoding, and uncover keys.",
    Online_Round: 3,
  },
  {
    icon: GitPullRequestArrow,
    title: "OSINT",
    desc: "Sometimes, the most powerful hacking tool is just… Google. OSINT challenges are about finding hidden information using only public sources",
    WhatULearn:
      "You'll learn to think like a digital detective — uncovering usernames, email trails, or leaked files without touching a line of code",
    What_you_will_encounter:
      "Extract data from only public sources like social media manually or using automated tools. This data can be clues or the Flags.",
    Online_Round: 3,
  },
  {
    icon: ChartColumn,
    title: "Forensics",
    desc: "Something is hidden inside a file, an image, or a network capture — can you find it?",
    WhatULearn:
      "Forensics challenges give you digital files to analyze photos with hidden data or files hiding clues",
    What_you_will_encounter:
      "Analyze image files, uncover metadata, and extract hidden information",
    Online_Round: 2,
  },
  {
    icon: RotateCcw,
    title: "Reverse Engineering",
    desc: "Ever wonder what a program is really doing behind the scenes?",
    WhatULearn:
      "In Reverse Engineering, you’ll take apart small programs (like .exe or .py files) to figure out how they work, what secrets they hold, or how to trick them.",
    What_you_will_encounter:
      "Understand small programs, read code logic, extract hidden strings, and find bypasses.",
    Online_Round: 1,
  },
];
