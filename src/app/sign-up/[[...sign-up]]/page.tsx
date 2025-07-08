import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <section className="min-h-screen  flex justify-center items-center">
      <SignUp />
    </section>
  );
}
