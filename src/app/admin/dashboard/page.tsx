"use client";
import { useEffect, useState } from "react";

// Define proper TypeScript interfaces
interface Stats {
  total_users: number;
  total_ambassadors: number;
  total_referrals: number;
}

interface Ambassador {
  id: string;
  fullname_en: string;
  email: string;
  phone: string;
  birthday: string;
  governorate: string;
  organization: string;
  role_title: string;
  ambassador_code: string;
  created_at: string;
  referral_count?: number;
}

interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  governorate: string;
  current_grade: string;
  receive_updates: string;
  created_at: string;
}

interface DashboardData {
  stats: Stats;
  top_ambassadors: Ambassador[];
  all_users: User[];
  all_ambassadors: Ambassador[];
}

interface ApiResponse {
  success: boolean;
  data?: DashboardData;
  message?: string;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        setError("No admin token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/admin/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        const result: ApiResponse = await res.json();
        if (result.success && result.data) {
          setData(result.data);
        } else {
          setError(result.message || "Failed to load dashboard");
        }
      } catch {
        setError("Network error");
      }
      setLoading(false);
    };

    fetchDashboard();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  if (!data) {
    return <p className="text-center text-red-600 mt-10">No data available</p>;
  }

  const { stats, top_ambassadors, all_users, all_ambassadors } = data;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl">{stats.total_users}</p>
        </div>
        <div className="p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Ambassadors</h2>
          <p className="text-2xl">{stats.total_ambassadors}</p>
        </div>
        <div className="p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Referrals</h2>
          <p className="text-2xl">{stats.total_referrals}</p>
        </div>
      </div>

      {/* Top Ambassadors */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Top Ambassadors</h2>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Organization</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Referrals</th>
            </tr>
          </thead>
          <tbody>
            {top_ambassadors.map((amb: Ambassador, i: number) => (
              <tr key={amb.id}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{amb.fullname_en}</td>
                <td className="border p-2">{amb.organization}</td>
                <td className="border p-2">{amb.role_title}</td>
                <td className="border p-2">{amb.referral_count || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* All Users */}
      <div>
        <h2 className="text-xl font-semibold mb-2">All Users</h2>
        <div className="overflow-auto">
          <table className="min-w-[800px] border">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Governorate</th>
                <th className="border p-2">Grade</th>
                <th className="border p-2">Updates</th>
                <th className="border p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {all_users.map((user: User) => (
                <tr key={user.id}>
                  <td className="border p-2">{user.fullname}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">0{user.phone}</td>
                  <td className="border p-2">{user.governorate}</td>
                  <td className="border p-2">{user.current_grade}</td>
                  <td className="border p-2">
                    {user.receive_updates === "1" ? "✅" : "❌"}
                  </td>
                  <td className="border p-2">{user.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* All Ambassadors */}
      <div>
        <h2 className="text-xl font-semibold mb-2">All Ambassadors</h2>
        <div className="overflow-auto">
          <table className="min-w-[900px] border">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Birthday</th>
                <th className="border p-2">Governorate</th>
                <th className="border p-2">Organization</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Code</th>
                <th className="border p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {all_ambassadors.map((amb: Ambassador) => (
                <tr key={amb.id}>
                  <td className="border p-2">{amb.fullname_en}</td>
                  <td className="border p-2">{amb.email}</td>
                  <td className="border p-2">0{amb.phone}</td>
                  <td className="border p-2">{amb.birthday}</td>
                  <td className="border p-2">{amb.governorate}</td>
                  <td className="border p-2">{amb.organization}</td>
                  <td className="border p-2">{amb.role_title}</td>
                  <td className="border p-2">{amb.ambassador_code}</td>
                  <td className="border p-2">{amb.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
