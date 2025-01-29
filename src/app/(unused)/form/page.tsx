"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import logo from "../../../assets/cube.png";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [lookingForTeam, setLookingForTeam] = useState<boolean>(false);
  const [interest, setInterest] = useState<string>("");
  const [hasExperience, setHasExperience] = useState<boolean>(false);
  const [experienceDetails, setExperienceDetails] = useState<string>("");
  const [selectedWorkAreas, setSelectedWorkAreas] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleWorkAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedWorkAreas(
      (prev) =>
        e.target.checked
          ? [...prev, value] // Add selected value if checked
          : prev.filter((area) => area !== value), // Remove if unchecked
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          year,
          lookingForTeam,
          interest,
          hasExperience,
          experienceDetails,
          selectedWorkAreas,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setEmail("");
        setName("");
        setYear("");
        setLookingForTeam(false);
        setInterest("");
        setHasExperience(false);
        setExperienceDetails("");
        setSelectedWorkAreas([]);
      } else {
        const errorData = await response.json();
        setMessage(`Failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Image src={logo} alt="logo" className="h-24 w-24" />
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Register Your Interest
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
        <input
          type="text"
          placeholder="Enter your year (e.g., 1, 2, 3, or 4)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="What are your interests?"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={lookingForTeam}
            onChange={() => setLookingForTeam(!lookingForTeam)}
            className="mr-2"
          />
          Looking for a team?
        </label>

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={hasExperience}
            onChange={() => setHasExperience(!hasExperience)}
            className="mr-2"
          />
          Do you have experience?
        </label>

        {hasExperience && (
          <textarea
            placeholder="Describe your experience"
            value={experienceDetails}
            onChange={(e) => setExperienceDetails(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        )}

        <label className="block mb-2">What would you like to work on?</label>

        <div className="mb-4">
          {[
            "frontend",
            "backend",
            "api_connection",
            "presentation",
            "problem_solving",
          ].map((area) => (
            <label key={area} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={area}
                checked={selectedWorkAreas.includes(area)}
                onChange={handleWorkAreaChange}
                className="mr-2"
              />
              {area.charAt(0).toUpperCase() + area.slice(1).replace("_", " ")}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#832b2b] text-white font-semibold rounded-md hover:bg-[#832b2b] transition duration-200"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-green-800">{message}</p>}
    </div>
  );
}
