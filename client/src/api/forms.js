import axios from "axios";

/*
 * FRIDAY DEPLOYMENT:
 * Add VITE_API_URL to the frontend project's environment variables in Vercel.
 *
 * Example:
 * VITE_API_URL=https://heath-tdi-api.vercel.app
 *
 * Do not include a trailing slash.
 * Keep the localhost fallback for development on your computer.
 */
const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitContactForm(formData) {
  const response = await api.post("/api/contact", formData);
  return response.data;
}

export async function submitSupportForm(formData) {
  const response = await api.post("/api/support", formData);
  return response.data;
}
