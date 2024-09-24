import {
  FaCode,
  FaGitAlt,
  FaBrain,
  FaLaptopCode,
  FaShieldAlt,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { GiArtificialHive } from "react-icons/gi";
import { TbLock } from "react-icons/tb";

export default function Usage() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-10 mt-10 mx-4 lg:mx-0 md:mx-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:max-w-2xl md:max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Empower Your Journey with the CS Society
          </h2>
          <p className="mt-2 text-lg text-gray-600 hidden md:block lg:block">
            Join our Computer Science Society and dive deep into the world of
            software engineering!
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {/* Card 1: Interview Preparation */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <FaCode size={40} className="text-gray-600" />
            <h3 className="mt-4 font-semibold text-gray-900">
              Interview Preparation
            </h3>
            <p className="mt-2 text-gray-700">
              Prepare for technical interviews with hands-on practice of coding
              challenges, mental math exercises, and mock interview scenarios.
            </p>
          </li>

          {/* Card 2: Git and Version Control */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <FaGitAlt size={40} className="text-gray-600" />
            <h3 className="mt-6 font-semibold text-gray-900">
              Git and Version Control
            </h3>
            <p className="mt-2 text-gray-700">
              Master Git fundamentals and collaborate on projects via GitHub.
              Learn how to manage version control, branch workflows, and code
              reviews effectively.
            </p>
          </li>

          {/* Card 3: AI and Machine Learning */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <GiArtificialHive size={40} className="text-gray-600" />
            <h3 className="mt-6 font-semibold text-gray-900">
              AI and Machine Learning
            </h3>
            <p className="mt-2 text-gray-700">
              Dive into the world of Artificial Intelligence and Machine
              Learning. Learn the core concepts and implement basic algorithms
              to build smart applications.
            </p>
          </li>

          {/* Card 4: Blockchain and FinTech */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <TbLock size={40} className="text-gray-600" />
            <h3 className="mt-6 font-semibold text-gray-900">
              Blockchain and FinTech
            </h3>
            <p className="mt-2 text-gray-700">
              Explore the transformative power of blockchain technology.
              Understand decentralized finance and learn to create smart
              contracts on platforms like Ethereum.
            </p>
          </li>

          {/* Card 5: Web Development */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <FaLaptopCode size={40} className="text-gray-600" />
            <h3 className="mt-6 font-semibold text-gray-900">
              Web Development
            </h3>
            <p className="mt-2 text-gray-700">
              Gain hands-on experience with web technologies such as HTML, CSS,
              and JavaScript. Learn how to build dynamic, responsive websites
              and deploy them online.
            </p>
          </li>

          {/* Card 6: Cybersecurity */}
          <li className="rounded-2xl border border-gray-200 p-8">
            <FaShieldAlt size={40} className="text-gray-600" />
            <h3 className="mt-6 font-semibold text-gray-900">Cybersecurity</h3>
            <p className="mt-2 text-gray-700">
              Get introduced to the fundamentals of cybersecurity, including how
              to secure web applications, data, and networks from online threats
              and attacks.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
