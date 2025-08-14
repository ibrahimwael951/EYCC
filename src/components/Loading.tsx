import React from "react";
import Loader4 from "./Animation_Components/Loader4";

const Loading = () => {
  return (
    <section className="min-h-screen text-center flex flex-col gap-40 justify-center items-center">
      <div className="scale-75">
        <Loader4 />
      </div>

      <h1 className="text-4xl  ">Loading....</h1>
    </section>
  );
};

export default Loading;
