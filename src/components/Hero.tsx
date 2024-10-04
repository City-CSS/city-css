import React, { FC } from "react";
import { FaComments, FaFilePdf } from "react-icons/fa";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Cube from "../assets/cube.png"; // Ensure this path is correct
import Image from "next/image";

// Define the props for DetailedCard
interface DetailedCardProps {
  title: string;
  description: string;
  date: string;
  comments: number;
  tags: string[];
  icon?: boolean;
  svgImage?: string;
}

// DetailedCard component with proper prop types
const DetailedCard: FC<DetailedCardProps> = ({
  title,
  description,
  date,
  comments,
  tags,
  icon,
  svgImage,
}) => (
  <div className="shadow-lg p-4 bg-white rounded-lg w-full max-w-xs">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
    <p className="text-xs text-gray-500 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <div className="flex space-x-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-2 text-gray-500">
        {icon && <FaFilePdf />}
        <FaComments />
        <span className="text-xs">{comments}</span>
      </div>
      {svgImage && (
        <div className="flex justify-center">
          <img src={svgImage} alt="SVG Illustration" className="h-10 w-15" />
        </div>
      )}
    </div>
  </div>
);

const Hero: FC = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div
          className="absolute z-50 inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#c11c2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] md:w-[50rem] lg:w-[60rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute top-6 -left-12 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Join Our Workshops"
              description="Participate in coding workshops and tech talks."
              date="Coming Soon"
              comments={0}
              tags={["Workshops", "Tech Talks"]}
            />
          </div>
          <div className="absolute bottom-20 -right-12 transform -rotate-3 hidden sm:block">
            <DetailedCard
              title="Hackathons & Competitions"
              description="Showcase your skills in exciting challenges."
              date="Annual"
              comments={0}
              tags={["Hackathons", "Competitions"]}
            />
          </div>

          <div className="absolute bottom-20 -left-12 transform rotate-6 hidden sm:block">
            <DetailedCard
              title="Networking Opportunities"
              description="Connect with peers and industry professionals."
              date="Ongoing"
              comments={0}
              tags={["Networking", "Career"]}
            />
          </div>
          <div className="absolute top-4 -right-20 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Community Projects"
              description="Contribute to open-source projects and build your portfolio."
              date="Ongoing"
              comments={0}
              tags={["Open Source", "Projects"]}
            />
          </div>
          <div className="absolute top-48 -left-10 transform rotate-12 hidden sm:block">
            <DetailedCard
              title="Career Support"
              description="Get guidance on internships, job placements, and interviews."
              date="Available"
              comments={0}
              tags={["Career Support", "Guidance"]}
            />
          </div>
          <div className="absolute bottom-56 -left-10 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Coding Bootcamps"
              description="Intensive bootcamps to master new technologies."
              date="Scheduled"
              comments={0}
              tags={["Bootcamps", "Learning"]}
            />
          </div>
          <div className="absolute top-40 -right-20 transform rotate-6 hidden sm:block">
            <DetailedCard
              title="Tech Talks"
              description="Hear from industry experts on the latest trends."
              date="Monthly"
              comments={0}
              tags={["Tech Talks", "Experts"]}
            />
          </div>
          <div className="absolute bottom-52 -right-16 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Social Events"
              description="Connect with fellow students through fun activities."
              date="Monthly"
              comments={0}
              tags={["Social", "Events"]}
            />
          </div>

          <div className="mb-16 relative z-10 flex flex-col items-center text-center ">
            <div className="mb-2 bg-white-500 rounded-full flex items-center justify-center w-full">
              <Image
                src={Cube}
                alt="City University Logo"
                className="w-44 h-auto"
              />{" "}
            </div>

            <div className="mx-auto max-w-2xl text-center mb-8">
              <a href="https://discord.gg/RMEfBSeSPU">
                <div className=" bg-gray-100 text-md leading-6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20 rounded-full px-5">
                  Join our discord Now!
                </div>
              </a>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-3">
              Welcome to City University <br />
              Computer Science Society
            </h1>
            <p className="text-md text-gray-500 mb-6">
              At the CSS, we foster a thriving community for tech enthusiasts
              and innovators.
              <br />
              Join us to explore new technologies, collaborate on projects, and
              advance your career.
            </p>

            <div className="flex flex-col bg-white z-50 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 mb-4">
              <a href="https://www.csgsu.co.uk/community/societies/society/css/">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Subscribe Now
                  </span>
                </ShimmerButton>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              <span role="img" aria-label="calendar">
                🗓️
              </span>{" "}
              Join us to participate in events
            </p>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] w-full h-full",
        )}
      />
    </div>
  );
};

export default Hero;
