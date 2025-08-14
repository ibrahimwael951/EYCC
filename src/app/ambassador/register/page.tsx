"use client";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";

import { Animate, FadeLeft } from "@/animation/Animations";
import {
  getAmbassadorDashboard,
  registerAmbassador,
} from "@/utils/hackclubApi";
import { getRecaptchaToken } from "@/utils/recaptcha";
import { SITE_KEY } from "@/types/Auth";
import Loading from "@/components/Loading";

export default function RegisterAmbassadorPage() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
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

  const [formData, setFormData] = useState({
    fullname_en: "",
    email: "",
    phone: "",
    birthday: "",
    governorate: "",
    organization: "",
    role_title: "",

    receive_updates: false,
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullname_en ||
      !formData.email ||
      !formData.phone ||
      !formData.organization ||
      !formData.governorate ||
      !formData.role_title ||
      !formData.birthday ||
      !formData.password 
    ) {
      setMessage("Please fill in all required fields.");
      setSuccess(false);
      return;
    }

    const nameWords = formData.fullname_en.trim().split(/\s+/);
    if (nameWords.length <= 3) {
      setMessage(
        "Full name must contain more than 3 words (as in your national ID)."
      );
      setSuccess(false);
      return;
    }

    if (formData.phone.trim().length !== 11) {
      setMessage("Write your full phone number so we can contact you.");
      setSuccess(false);
      return;
    }

    try {
      setLoading(true);
      const recaptcha_response = await getRecaptchaToken(
        `${SITE_KEY}`,
        "submit"
      );
      const res = await registerAmbassador({
        ...formData,
        recaptcha_response,
      });

      if (res.success) {
        localStorage.setItem("ambassador_token", res.access_token);
        setSuccess(true);
        setMessage("Registration successful! Redirecting...");
        window.location.href = "/ambassador/dashboard";
      } else {
        setSuccess(false);
        setMessage(res.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  return (
    <section className="mt-32 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        {/* Full Name */}
        <div>
          <label htmlFor="fullname_en" className="block text-xl mb-2">
            Full Name *
          </label>
          <input
            id="fullname_en"
            name="fullname_en"
            value={formData.fullname_en}
            onChange={handleChange}
            placeholder="Enter your full name (as in national ID)"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xl mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your personal email"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xl mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Birthday */}
        <div>
          <label htmlFor="birthday" className="block text-xl mb-2">
            Birthday *
          </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
            onFocus={(e) => e.target.showPicker?.()}
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full "
          />
        </div>

        {/* Governorate */}
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
            className="text-xl p-4 rounded-2xl outline-none border-t border-l border-green-600 text-white w-full bg-black"
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

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-xl mb-2">
            Organization *
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter your organization"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role_title" className="block text-xl mb-2">
            Role Title *
          </label>
          <input
            id="role_title"
            name="role_title"
            value={formData.role_title}
            onChange={handleChange}
            placeholder="Role title (student, teacher, etc.)"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-xl mb-2">
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="**********"
            required
            className="text-xl p-4 rounded-2xl border-t border-l border-green-600 text-white w-full"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start">
          <input
            id="receive_updates"
            name="receive_updates"
            type="checkbox"
            checked={formData.receive_updates}
            onChange={handleChange}
            className="w-5 h-5 mt-1 mx-2 accent-green-600"
          />
          <label htmlFor="receive_updates" className="text-lg">
            I want to receive updates about EYCC, hackathons, and Hack Club
            opportunities.
          </label>
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={loading}
          className="p-3 text-2xl font-semibold w-full bg-green-600 rounded-2xl hover:bg-transparent border border-t border-l border-green-600 duration-150"
        >
          {loading ? "Submitting..." : "Register Ambassador Now"}
        </motion.button>

        {/* Message */}
        {message && (
          <motion.div
            {...FadeLeft}
            {...Animate}
            className={`p-4 rounded-2xl ${
              success ? "bg-green-600" : "bg-red-500"
            } text-white`}
          >
            {message}
          </motion.div>
        )}
      </form>
    </section>
  );
}
