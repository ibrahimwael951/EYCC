"use client";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function AdminLogin() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      setMessage("reCAPTCHA not loaded yet.");
      return;
    }
    setLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha("admin_login");

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/admin/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: form.username,
            password: form.password,

            recaptcha_response: recaptchaToken,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("admin_token", data.access_token);
        setMessage("✅ Login successful!");
        window.location.href = "/admin/dashboard";
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      setMessage(`❌ Network error ${err}`);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-sm mx-auto p-4 border rounded mt-32"
    >
      <h2 className="text-xl font-bold">Admin Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}
