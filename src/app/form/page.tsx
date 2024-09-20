"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import logo from "../../assets/cube.png";
export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const data: { message: string } = await response.json();
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setMessage("Failed to join the waiting list. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Image src={logo} alt="logo" className="h-24 w-24" />
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Join Our Welcome Day Event
      </h1>
      <form
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#832b2b] text-white font-semibold rounded-md hover:bg-[#832b2b] transition duration-200"
        >
          Join
        </button>
      </form>
      {message && <p className="mt-4 text-green-800">{message}</p>}
      <p className="text-gray-600">
        You wont need any ticket its just to know the overall numbers
      </p>
    </div>
  );
}
