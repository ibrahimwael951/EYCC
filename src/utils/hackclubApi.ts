import { ambassadorLogin, ambassadorRegister, register } from "@/types/Auth";

const API_BASE = process.env.NEXT_PUBLIC_API;

async function postJSON<T>(endpoint: string, data: object): Promise<T> {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function registerUser(data: register) {
  const res = await fetch(`${API_BASE}/register_user.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

// Register an ambassador
export async function registerAmbassador(data: ambassadorRegister) {
  const res = await fetch(`${API_BASE}/register_ambassador.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

// Add this interface for the ambassador login response
interface AmbassadorLoginResponse {
  success: boolean;
  access_token?: string;
  message?: string;
}

// Update your function to use the proper type
export async function loginAmbassador(data: ambassadorLogin) {
  const result = await postJSON<AmbassadorLoginResponse>(
    "ambassador_login.php",
    data
  );

  if (result.success && result.access_token) {
    localStorage.setItem("ambassador_token", result.access_token);
  }

  return result;
}
/**
 * Get ambassador dashboard
 */
export async function getAmbassadorDashboard() {
  const token = localStorage.getItem("ambassador_token");
  if (!token) throw new Error("Not authenticated");

  const res = await fetch(`${API_BASE}/ambassador_dashboard.php`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
