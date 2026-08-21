import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function submitContactForm(formData) {
  const res = await axios.post(`${API_URL}/api/contact`, formData);

  return res.data;
}

export async function submitSupportForm(formData) {
  const res = await axios.post(`${API_URL}/api/support`, formData);

  return res.data;
}
