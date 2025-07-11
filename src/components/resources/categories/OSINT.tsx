import { GitPullRequestArrow } from "lucide-react";
import React from "react";

const OSINT = () => {
  return (
    <section id="OSINT">
      <h1 className="text-3xl font-semibold mb-5 flex items-center gap-2">
        <GitPullRequestArrow size={50} className="text-green-600" />
        OSINT
      </h1>
      <p className="mb-5 text-xl">
        Best YouTube video for OSINT Techniques:{" "}
        <a
          className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
          href="https://www.youtube.com/watch?v=qwA6MmbeGNo&t=2s"
        >
          OSINT in 5 Hours
        </a>
      </p>
      <p className="mb-5 text-xl">
        Full Framework that contains all the search engines and tools for
        everything:{" "}
        <a
          className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
          href="https://osintframework.com/"
        >
          {" "}
          OSINT framework
        </a>
      </p>
    </section>
  );
};

export default OSINT;
