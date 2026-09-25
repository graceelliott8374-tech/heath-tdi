import axios from "axios";

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

export async function submitAssessmentForm(formData) {
  const response = await api.post("/api/assessment", formData);
  return response.data;
}
