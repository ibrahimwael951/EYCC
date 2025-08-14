"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRecaptchaToken } from "@/utils/recaptcha";
import { getAmbassadorDashboard, loginAmbassador } from "@/utils/hackclubApi";
import Loading from "@/components/Loading";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export default function AmbassadorLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkDashboard = async () => {
      try {
        const result = await getAmbassadorDashboard();
        if (result.success) {
          window.location.href = "/ambassador/dashboard";
          setLoading(true);
        }
      } catch (err) {
        console.error("Dashboard check failed:", err);
        setLoading(false);
      }
    };

    checkDashboard();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const recaptcha_response = await getRecaptchaToken(SITE_KEY, "submit");
      const res = await loginAmbassador({
        email: formData.email,
        password: formData.password,
        recaptcha_response,
      });

      if (res.success && res.access_token) {
        localStorage.setItem("ambassador_token", res.access_token);
        window.location.href = "/ambassador/dashboard";
      } else {
        setSubmitMessage(res.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <Loading />;
  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 py-8 mt-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
        Ambassador Login — Access your dashboard to manage your activities. If
        you don’t have an account yet,{" "}
        <Link
          className="text-green-600 hover:border-b border-green-600 m-2"
          href="/ambassador/register"
        >
          register here
        </Link>
        .
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        Please use your registered email and password. This login is for
        ambassadors only.
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xl font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l border-green-600 text-white w-full"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xl font-medium mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l border-green-600 text-white w-full"
              placeholder="Enter your password"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="p-3 text-2xl font-semibold w-full bg-green-600 rounded-2xl hover:bg-transparent border border-green-600 duration-150"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </motion.button>

          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-2xl bg-red-600 text-white"
            >
              {submitMessage}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
