import React from "react";
import Link from "next/link" 
import { LucideIcon } from "lucide-react";
interface props {
  href:string;
  icon: LucideIcon;
  title: string;
  desc: string;
  WhatULearn: string;
}
const categoryCard: React.FC<props> = ({
  href,
  WhatULearn,
  desc,
  icon: Icon,
  title,
}) => {
  return (
    <Link href={href}>
    <div className="lg:w-[400px]  h-80 group hover:bg-green-600 border-t border-l border-green-600 rounded-2xl p-4 duration-150">
      <div className="flex items-center gap-2">
        <Icon size={50} className="group-hover:text-white text-green-600" />
        <h1 className="mb-3 text-3xl  font-bold ">{title}</h1>
      </div>
      <p className="text-xl text-neutral-400 mb-3 group-hover:text-white">
        {desc}
      </p>
      <p className=" text-lg font-medium  ">{WhatULearn}</p>
      <div></div>
    </div>
    </Link>
  );
};

export default categoryCard;
