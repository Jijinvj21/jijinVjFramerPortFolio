// components/ContactForm.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit handler (with dummy API)
const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
  setErrors({});
  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://notion-to-portfolo-form.vercel.app/submit-to-notion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("Something went wrong! Please try again.");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSuccess(false), 3000);
  }
};


  return (
    <div className="w-full md:w-1/2 mx-auto md:!mt-8 rounded-lg shadow-md ">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 !mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-white/[0.1] bg-neutral-950 !p-2 text-white focus:!border-purple-500 focus:ring-1 focus:!ring-purple-500"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm !mt-1">{errors.name}</p>
            )}
          </div>
          <div className="!mb-4">
            <label className="block text-gray-300 !mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-white/[0.1] bg-neutral-950 !p-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm !mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="!mb-4 ">
          <label className="block text-gray-300 !mb-2">Message *</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-white/[0.1] bg-neutral-950 !p-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm !mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-white text-black font-medium !py-2 shadow-md disabled:opacity-70"
        >
          {isSubmitting ? (
            <motion.div
              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          ) : (
            <>
              <Send className="h-4 w-4" />
              {success ? "Message Sent!" : "Send Message"}
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
