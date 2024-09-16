"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>(""); // Explicitly specify the type
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data: { message: string } = await response.json(); // Specify the expected response structure
        setMessage(data.message);
        setEmail(""); // Clear the input after successful submission
      } else {
        setMessage("Failed to join the waiting list. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Join Our Waiting List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
