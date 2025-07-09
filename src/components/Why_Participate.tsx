import React from "react";
import BackGround from "@/components/Animation_Components/Loader3";
const Why_Participate = () => {
  const WHY = [
    "Join Egypt’s first-ever cybersecurity competition & community for high schoolers",
    "If you have potential through learning cybersecurity, this is your opportunity of learning and connecting with like-minded ethical hackers",
  ];

  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 ">
      <h1 className="text-4xl md:text-5xl">
        Why
        <span className="text-green-600"> Participate </span> ?
      </h1>
      <div className="relative   flex gap-20 justify- evenly items-start overflow-hidden ">
        <div className="md:w-2/4 ml-4 my-5 flex flex-col gap-4 ">
          {WHY.map((item) => (
            <p key={item} className="text-xl">
              _{item}
            </p>
          ))}
          <div>
            <h1 className="text-4xl md:text-5xl ">
              No<span className="text-green-600"> Experience </span>?
            </h1>
            <p className="text-xl">
              No Problem, it is your chance for start learning and competing
              with others!
            </p>
          </div>
        </div>
        <div className="hidden md:inline opacity-35  md:opacity-100 -z-10 absolute right-2/4 -translate-x-2/4 md:right-1/5 top-32  md:translate-x-0 md: w-fit scale-125">
          <BackGround />
        </div>
      </div>
    </section>
  );
};

export default Why_Participate;
