import React from "react";

const sessions = [
  {
    title: "Session 1: Introduction to Git and Version Control",
    date: "January 10, 2024",
    content: (
      <>
        <h3 className="text-md font-semibold">1. Why Care?</h3>
        <p>Explanation of version control systems (VCS).</p>

        <h3 className="text-md font-semibold">2. What is Git?</h3>
        <p>What is Git? Why use it?</p>

        <h3 className="text-md font-semibold">3. Being a Good Engineer</h3>
        <p>Importance of writing good commits, including dos and donts.</p>

        <h3 className="text-md font-semibold">4. Basic Commands</h3>
        <p>Importance of version control in software development.</p>

        <h3 className="text-md font-semibold">5. QA and Practice</h3>
        <p>Time for questions and practical exercises.</p>
      </>
    ),
    notionLink:
      "https://conscious-temple-3e3.notion.site/Session-1-Introduction-to-Git-and-Version-Control-206b9e035c66413e9044d7e79a3563c9",
  },
  {
    title: "Session 2: Branching, Merging, and Collaboration",
    date: "January 17, 2024",
    description:
      "Understanding branches, merges, and handling merge conflicts.",
    notionLink: "https://your-notion-link-for-session-2",
  },
  {
    title: "Session 3: Advanced Git Features and History Management",
    date: "January 24, 2024",
    description:
      "Exploring advanced features like rebasing, stashing, and managing commit history.",
    notionLink: "https://your-notion-link-for-session-3",
  },
  {
    title: "Session 4: Lets Get Practical",
    date: "January 31, 2024",
    description: "Hands-on practice with real-world Git scenarios.",
    notionLink: "https://your-notion-link-for-session-4",
  },
];

export default function GitPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Git Sessions</h1>

      <h2 className="text-3xl font-semibold mb-4 text-gray-700">
        Table of Contents
      </h2>
      <ul className="list-disc list-inside mb-8">
        {sessions.map((session, index) => (
          <li key={index} className="mb-2">
            <a
              href={`#session-${index}`}
              className="text-blue-600 hover:underline"
            >
              {session.title}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold mb-4 text-gray-700">
        Session Content
      </h2>
      {sessions.map((session, index) => (
        <div key={index} id={`session-${index}`} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {session.title}
          </h3>

          <p className="mb-2">
            <a
              href={session.notionLink}
              className="text-gray-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion Page
            </a>
          </p>
          {session.content ? (
            <div className="mt-2 text-gray-700">{session.content}</div>
          ) : (
            <p className="text-gray-700">{session.description}</p>
          )}
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-4 text-gray-700">Resources</h2>
      <ul className="list-disc list-inside mb-8">
        <li className="mb-2">
          <a
            href="https://github.com/git-guides"
            className="text-blue-600 hover:underline"
          >
            Git Guides
          </a>
        </li>
        <li>
          <a
            href="https://www.atlassian.com/git/tutorials"
            className="text-blue-600 hover:underline"
          >
            Atlassian Git Tutorials
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Additional Links
      </h2>
      <p className="mb-2">
        <a
          href="https://your-notion-page-link"
          className="text-blue-600 hover:underline"
        >
          Notion Page
        </a>
      </p>
      <p>
        <a
          href="https://your-slides-link"
          className="text-blue-600 hover:underline"
        >
          Slides
        </a>
      </p>
    </div>
  );
}
