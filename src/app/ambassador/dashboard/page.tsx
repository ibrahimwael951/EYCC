// pages/AmbassadorDashboard.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAmbassadorDashboard } from "@/utils/hackclubApi";
import {
  Calendar,
  LucideIcon,
  Mail,
  MapPinHouse,
  Phone,
  School,
  User,
  Award,
  Users,
} from "lucide-react";
import { Animate, FadeLeft } from "@/animation/Animations";
import Loading from "@/components/Loading";
import CopyInviteLink from "@/components/ui/CopyToClipboard";

interface User {
  fullname_en: string;
  email: string;
  phone: string;
  governorate: string;
  organization: string;
  birthday: string;
  role_title: string;
  ambassador_code: string;
  created_at: string;
}

export default function AmbassadorDashboard() {
  const [loading, setLoading] = useState(true);
  const [referrals, setReferrals] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [ambassadorCode, setAmbassadorCode] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAmbassadorDashboard();
        if (result.success) {
          setReferrals(result.data.stats.total_referrals);
          setUser(result.data.ambassador_data);
          setAmbassadorCode(result.data.ambassador_code);
        } else {
          console.error(result.message || "Failed to load dashboard");
        }
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (!user)
    return <p className="text-center mt-10">No ambassador data found.</p>;

  const UserDetails = [
    { label: "Full Name", Content: user.fullname_en, Icon: User },
    { label: "Email", Content: user.email, Icon: Mail },
    { label: "Birthday", Content: user.birthday, Icon: Calendar },
    { label: "Governorate", Content: user.governorate, Icon: MapPinHouse },
    { label: "Organization", Content: user.organization, Icon: School },
    { label: "Phone", Content: user.phone, Icon: Phone },
  ];

  return (
    <section className="mt-32 max-w-5xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Ambassador Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total Referrals" value={referrals} Icon={Users} />

        <StatCard
          label="Ambassador Code"
          value={ambassadorCode}
          Icon={Award}
          mono
        />
      </div>

      {/* User Info Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {UserDetails.map((item, i) => (
          <InfoCard
            key={i}
            Content={item.Content}
            Icon={item.Icon}
            label={item.label}
          />
        ))}
      </section>

      <section>
        <CopyInviteLink ambassadorCode={ambassadorCode} />
      </section>
    </section>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  Icon: LucideIcon;
  mono?: boolean;
}

function StatCard({ label, value, Icon, mono }: StatCardProps) {
  return (
    <motion.div
      {...FadeLeft}
      {...Animate}
      className="border border-green-600 rounded-2xl p-4 flex flex-col items-center justify-center shadow"
    >
      <Icon size={28} className="text-green-600 mb-2" />
      <p className="text-lg font-semibold">{label}</p>
      <p
        className={`text-2xl font-bold mt-1 ${
          mono ? "font-mono" : ""
        } text-green-800`}
      >
        {value}
      </p>
    </motion.div>
  );
}

interface InfoCardProps {
  Content: string;
  Icon: LucideIcon;
  label: string;
}

function InfoCard({ Content, Icon, label }: InfoCardProps) {
  return (
    <motion.div
      {...FadeLeft}
      {...Animate}
      className="border border-green-600 flex items-center gap-3 rounded-2xl p-4 shadow"
    >
      <Icon size={24} className="text-green-600" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium">{Content}</p>
      </div>
    </motion.div>
  );
}
