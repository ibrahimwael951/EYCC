"use client";
import React, { useState, ChangeEvent, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Animate, FadeLeft } from "@/animation/Animations";
import Loader1 from "@/components/Animation_Components/Loader1";
import Link from "next/link";
import { register, SITE_KEY } from "@/types/Auth";
import { registerUser } from "@/utils/hackclubApi";
import { getRecaptchaToken } from "@/utils/recaptcha";
import { useSearchParams } from "next/navigation";

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-4xl md:text-5xl">Loading...</p>
      </div>
    </main>
  );
}

// Separate component for the registration form that uses useSearchParams
function RegistrationForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<register>({
    fullname: "",
    email: "",
    phone: "",
    governorate: "",
    current_grade: "",
    school: "",
    ambassador_code: "",
    receive_updates: false,
    recaptcha_response: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on mount and check URL parameters
  useEffect(() => {
    const hasSubmitted = localStorage.getItem("eycc_submitted");
    if (hasSubmitted === "true") {
      setIsJoined(true);
    } else {
      // Get ambassador code from URL parameters
      const ambassadorCodeFromUrl = searchParams.get("code") || "";

      const savedFormData = localStorage.getItem("eycc_form_data");
      if (savedFormData) {
        try {
          const parsedData = JSON.parse(savedFormData);
          setFormData({
            ...parsedData,
            // Override ambassador code if it exists in URL
            ambassador_code:
              ambassadorCodeFromUrl || parsedData.ambassador_code,
          });
        } catch (err) {
          console.error("Error parsing saved form data", err);
          // If parsing fails, still set ambassador code from URL
          setFormData((prev) => ({
            ...prev,
            ambassador_code: ambassadorCodeFromUrl,
          }));
        }
      } else if (ambassadorCodeFromUrl) {
        // If no saved data but ambassador code exists in URL
        setFormData((prev) => ({
          ...prev,
          ambassador_code: ambassadorCodeFromUrl,
        }));
      }
    }
    setLoading(false);
  }, [searchParams]);

  // Save draft form if not submitted
  useEffect(() => {
    if (!isJoined && !loading) {
      localStorage.setItem("eycc_form_data", JSON.stringify(formData));
    }
  }, [formData, isJoined, loading]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.governorate ||
      !formData.current_grade
    ) {
      setSubmitMessage("Please fill in all required fields.");
      return;
    }

    if (formData.fullname.trim().split(/\s+/).length <= 3) {
      setSubmitMessage(
        "Full name must contain more than 3 words (as in your national ID)."
      );
      return;
    }

    if (formData.phone.trim().length !== 11) {
      setSubmitMessage("Write your full number so we can contact you.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const recaptcha_response = await getRecaptchaToken(
        `${SITE_KEY}`,
        "submit"
      );
      const payload: register = {
        ...formData,
        recaptcha_response,
      };

      const result = await registerUser(payload);

      if (result.success) {
        localStorage.setItem("eycc_submitted", "true");
        localStorage.setItem(
          "eycc_user_data",
          JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            submittedAt: new Date().toISOString(),
          })
        );
        localStorage.removeItem("eycc_form_data");

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          governorate: "",
          current_grade: "",
          school: "",
          ambassador_code: "",
          receive_updates: false,
          recaptcha_response: "",
        });
        setIsJoined(true);
      } else {
        throw new Error(result.message || "Failed to submit registration");
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage(`${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isJoined) {
    let userName = "";
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("eycc_user_data");
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          userName = parsedData.fullName;
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }
    return (
      <main className="min-h-screen px-5 lg:px-10 2xl:px-20 flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="  rounded-2xl p-8">
            <div className="  text-6xl mb-4">✓</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
              Welcome to EYCC!
            </h1>
            {userName && (
              <p className="text-2xl mb-4">
                Hello <span className="text-green-600"> {userName} </span>, you
                are registered with us.
              </p>
            )}
            <p className=" text-xl mb-6">
              Your registration for the Egyptian Youth Cybersecurity Challenge
              (EYCC) has been
              <span className="text-green-600"> Successfully received </span> .
              We’re excited to welcome you to Egypt’s First Youth Cybersecurity
              Competition! To stay informed about competition updates,
              announcements, resources, and community discussions, make sure to
              join our Official WhatsApp Community:
              <a
                className="text-green-600 font-semibold hover:border-b border-green-600 m-2"
                href="https://chat.whatsapp.com/Hyzit2PowcrA31RHkk6juc?mode=ac_t"
              >
                WhatsApp link
              </a>
            </p>
          </div>
        </div>
        <div className="absolute top-2/4 left-2/4 -translate-2/4 opacity-40 scale-125 md:scale-200 -z-20">
          <div className="scale-125 lg:scale-150">
            <Loader1 />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 py-8 mt-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-6   leading-tight">
        Register now to join the first cybersecurity community for Egyptian high
        school students through EYCC. Even if you are new to cybersecurity, you
        can start learning and preparing using our{" "}
        <Link
          className="text-green-600 hover:border-b border-green-600 m-2"
          href="/Resources"
        >
          Resources
        </Link>{" "}
        before the competition begins
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        If you are planning to join as part of a team (up to 5 members), each
        member should register individually. Team formation will be handled and
        confirmed later when officially announced.
      </p>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block text-xl font-medium mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your full name ( as it appears in your official national ID)"
            />
          </div>

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
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your personal Email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xl font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your personal phone number"
            />
          </div>
          <div>
            <label htmlFor="school" className="block text-xl font-medium mb-2">
              School *
            </label>
            <input
              type="tel"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your School name"
            />
          </div>

          <div>
            <label
              htmlFor="ambassador_code"
              className="block text-xl font-medium mb-2"
            >
              Ambassador Code / Referral Code {"< optional >"}
              {formData.ambassador_code && (
                <span className="text-green-600 text-sm ml-2">
                  (Code detected from link)
                </span>
              )}
            </label>
            <input
              type="text"
              id="ambassador_code"
              name="ambassador_code"
              value={formData.ambassador_code}
              onChange={handleChange}
              disabled={formData.ambassador_code ? true : false}
              className={` ${
                formData.ambassador_code ? "cursor-not-allowed" : " cursor-auto"
              }
                 text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full`}
              placeholder="Ambassador Code"
            />
          </div>

          <div>
            <label
              htmlFor="governorate"
              className="block text-xl font-medium mb-2"
            >
              Governorate *
            </label>
            <select
              id="governorate"
              name="governorate"
              value={formData.governorate}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full bg-black"
            >
              <option value="">Select your governorate</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Port Said">Port Said</option>
              <option value="Suez">Suez</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
              <option value="Asyut">Asyut</option>
              <option value="Beheira">Beheira</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value="Damietta">Damietta</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Gharbia">Gharbia</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
              <option value="Matrouh">Matrouh</option>
              <option value="Minya">Minya</option>
              <option value="Monufia">Monufia</option>
              <option value="New Valley">New Valley</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Qena">Qena</option>
              <option value="Red Sea">Red Sea</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Sohag">Sohag</option>
              <option value="South Sinai">South Sinai</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="current_grade"
              className="block text-xl font-medium mb-2"
            >
              Current Grade *
            </label>
            <select
              id="current_grade"
              name="current_grade"
              value={formData.current_grade}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full bg-black"
            >
              <option value="">
                Select your grade as in the academic year 2024/2025{" "}
              </option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              id="receive_updates"
              name="receive_updates"
              checked={formData.receive_updates}
              onChange={handleChange}
              className="w-5 h-5 mt-1 mx-2 accent-green-600"
            />
            <label htmlFor="receive_updates" className="text-lg">
              I want to receive updates about EYCC, upcoming hackathons, and
              other Hack Club opportunities.
            </label>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className=" p-3 text-2xl font-semibold w-full bg-green-600 rounded-2xl hover:bg-transparent border border-green-600 duration-150"
          >
            {isSubmitting ? "Submitting..." : "Register Now"}
          </motion.button>

          {submitMessage && (
            <motion.div
              {...FadeLeft}
              {...Animate}
              className="p-4 rounded-2xl bg-red-600  text-white"
            >
              {submitMessage}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

// Main page component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RegistrationForm />
    </Suspense>
  );
}
