import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="border-l border-t border-2 border-green-600 rounded-2xl px-5 lg:px-10 py-16 w-full max-w-5xl space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold">
          Ambassador Program
        </h1>
        <p className="text-center text-lg font-medium">
          Become an EYCC Ambassador and help spread cybersecurity awareness to
          students across Egypt.
        </p>
        <div className="flex flex-col items-center justify-center gap-3">
          <Link
            href="/ambassador/register"
            className="py-3 px-5 bg-green-600 rounded-2xl text-black text-2xl font-bold hover:bg-transparent border-green-600 border hover:text-green-600 duration-150 "
          >
            Apply Now
          </Link>
          <p className="text-lg">
            Already part of the program? {"  "}
            <Link
              href="/ambassador/login"
              className="border-b border-green-600 text-green-600"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
