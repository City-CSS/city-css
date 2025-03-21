"use client";

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

// --- BANNER ---
export default function Banner(
    {colour} : {colour : string}
) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  // colour configuration
  const colourConfig = {
    red: {
      background: "bg-red-500 bg-gradient-to-r from-[#a73737] to-[#7a2828]",
      text: "text-white",
      button: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    },
    white: {
      background: " ",
      text: "text-slate-900",
      button: "bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-gray-900",
    }
  };
  type ColorConfig = {
    background: string;
    text: string;
    button: string;
  };
  // @ts-ignore
  const styles: ColorConfig = colourConfig[colour];

  return (
    <section
      id="get-started-today"
      className={`relative overflow-hidden py-24 ${styles.background}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className={`font-display text-4xl tracking-tight ${styles.text} font-semibold sm:text-5xl`}>
            Want to collaborate?
          </h2>
          <p className={`mt-4 text-lg tracking-tight ${styles.text}`}>
            Power a community of tech enthusiasts by becoming a sponsor. 
            Fuel innovation, skills, and spark shared success.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className={`group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm
            font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 mt-10
            ${styles.button}`}
          >
            Get In Touch 
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <CollaborationForm onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
}

interface FormData {
  email: string;
  company: string;
  interest: string;
}

interface CollaborationFormProps {
  onClose: () => void;
}

function CollaborationForm({ onClose }: CollaborationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    company: '',
    interest: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Basic local validation (optional)
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- HANDLE SUBMIT ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2df5e177-8f55-470b-8bd7-2d8b674d34a7",
          subject: "New Collaboration Offer",
          from_name: formData.company,
          ...formData,
        }),
      });

      if (response.status === 200) {
        setFormData({
          email: '',
          company: '',
          interest: ''
        });
        alert('Thank you for your interest! We will get back to you soon.');
        onClose();
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error("Error while submitting:", error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Collaboration Offer</h2>
      <form onSubmit={handleSubmit} className={"grid place-items-center"}>
        <div className={"space-y-8"}>
          {/* --- Email Field --- */}
          <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
          />
          {/* --- Company Field --- */}
          <TextField
              id="company"
              name="company"
              label="Company"
              type="text"
              variant="outlined"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              error={!!errors.company}
              helperText={errors.company}
              fullWidth
          />
          {/* --- Interest Field --- */}
          <TextField
              id="interst"
              name="interest"
              label="Interest"
              type="text"
              variant="outlined"
              placeholder="Tell us about your collaboration interests"
              value={formData.interest}
              onChange={handleChange}
              error={!!errors.interest}
              helperText={errors.interest}
              fullWidth
              multiline
              minRows={3}
              maxRows={6}
          />
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="mx-auto group inline-flex items-center justify-center rounded-full py-2 px-4 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-700 text-white hover:bg-red-600 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
