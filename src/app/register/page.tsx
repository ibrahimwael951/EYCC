"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Animate, FadeLeft, ViewPort } from "@/animation/Animations";
import Loader1 from "@/components/Animation_Components/Loader1";
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  governorate: string;
  grade: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    governorate: "",
    grade: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSubmitted = localStorage.getItem("eycc_submitted");
      if (hasSubmitted === "true") {
        setIsJoined(true);
      } else {
        const savedFormData = localStorage.getItem("eycc_form_data");
        if (savedFormData) {
          try {
            const parsedData = JSON.parse(savedFormData);
            setFormData(parsedData);
          } catch (error) {
            console.error("Error parsing saved form data:", error);
          }
        }
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !isJoined && !loading) {
      localStorage.setItem("eycc_form_data", JSON.stringify(formData));
    }
  }, [formData, isJoined, loading]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.school ||
      !formData.governorate ||
      !formData.grade
    ) {
      setSubmitMessage("Please fill in all required fields.");
      return;
    }

    const nameWords = formData.fullName.trim().split(/\s+/);
    if (nameWords.length !== 4) {
      setSubmitMessage(
        "Full name must contain exactly 4 words (Ibrahim Wael Ibrahim Shaban)."
      );
      return;
    }
    const NumberLength = formData.phone;
    if (NumberLength.length !== 11) {
      setSubmitMessage("Write your full number so we can contact with you");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(`${process.env.NEXT_LOCAL_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "School Name": formData.school,
          Governorate: formData.governorate,
          "Current Grade": formData.grade,
        }),
      });

      if (response.ok) {
        if (typeof window !== "undefined") {
          localStorage.setItem("eycc_submitted", "true");
          localStorage.setItem(
            "eycc_user_data",
            JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              submittedAt: new Date().toISOString(),
            })
          );

          localStorage.removeItem("eycc_form_data");
        }

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          school: "",
          governorate: "",
          grade: "",
        });
        setIsJoined(true);
      } else {
        throw new Error("Failed to submit registration");
      }
    } catch (error) {
      setSubmitMessage("Error submitting registration. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen px-5 lg:px-10 2xl:px-20 flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-4xl md:text-5xl">Loading...</p>
        </div>
      </main>
    );
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
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="  rounded-2xl p-8">
            <div className="  text-6xl mb-4">✓</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
              Welcome to EYCC!
            </h1>
            {userName && (
              <p className="text-lg mb-4">
                Hello <span className="text-green-600"> {userName} </span>, you
                are already registered with us.
              </p>
            )}
            <p className="  mb-6">
              Your registration has been{" "}
              <span className="text-green-600"> Successfully Submitted </span> .
              You will be notified about next steps via email.
            </p>
          </div>
        </motion.div>
        <div className="absolute top-2/4 left-2/4 -translate-2/4 opacity-40 scale-125 md:scale-200 -z-20">
          <Loader1 />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 py-8 mt-20">
      <motion.h1
        {...FadeLeft}
        {...ViewPort}
        className="text-2xl md:text-3xl font-bold mb-6   leading-tight"
      >
        Register now to join Egypts first cybersecurity community for high
        school students through EYCC. Even if you are new to cybersecurity, you
        can start learning and preparing using our Resources before the
        competition begins
      </motion.h1>

      <motion.p
        {...FadeLeft}
        {...ViewPort}
        className="text-gray-400 mb-8 text-lg"
      >
        If you are planning to join as part of a team (up to 5 members), each
        member should register individually. Team formation will be handled and
        confirmed later when officially announced.
      </motion.p>
      <motion.div {...FadeLeft} {...ViewPort} className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full Name * (4 words required)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your full name ( Ahmed Mohamed Ali Hassan)"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
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
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="school" className="block text-sm font-medium mb-2">
              School Name *
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full"
              placeholder="Enter your school name"
            />
          </div>

          <div>
            <label
              htmlFor="governorate"
              className="block text-sm font-medium mb-2"
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
            <label htmlFor="grade" className="block text-sm font-medium mb-2">
              Current Grade *
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="text-xl p-4 rounded-2xl outline-none border-t border-l  border-green-600 text-white w-full bg-black"
            >
              <option value="">Select your grade</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
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
      </motion.div>
    </main>
  );
}
