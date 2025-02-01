"use client";

import React, { useEffect, useState } from "react";

// Define an interface for the intern data
interface InternData {
  [key: string]: string; // This allows for dynamic keys with string values
}

export default function InternTable() {
  const [tableData, setTableData] = useState<InternData[]>([]); // Type the state as an array of InternData

  useEffect(() => {
    // Fetch the markdown file
    fetch("/internships_table.md") // Adjust this path based on where the file is located in your project
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the markdown file");
        }
        return response.text();
      })
      .then((markdown) => {
        const data = parseMarkdown(markdown);
        setTableData(data);
      })
      .catch((error) => console.error("Error fetching markdown file:", error));
  }, []);

  // Function to parse markdown table
  const parseMarkdown = (markdown: string): InternData[] => {
    const lines = markdown.trim().split("\n");
    const headers = lines[0].split("|").map((header) => header.trim());

    return lines.slice(2).map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      const rowData: InternData = {}; // Initialize rowData with the InternData type
      headers.forEach((header, index) => {
        rowData[header] = cells[index] || ""; // Ensure it handles empty cells
      });
      return rowData;
    });
  };

  return (
    <div className="mt-2 h-full mx-3">
        <h1>INTERNSHIPS</h1>
        <div className="border rounded">
        {tableData.length > 0 && (
          <table className="w-full">
            <thead>
              <tr className="border-b bg-blue-100 text-left">
                {Object.keys(tableData[0])
                  .filter((r) => r !== "link")
                  .map((header, index) => (
                    <th key={index}>{capitalizeFirstLetter(header)}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="odd: bg-white even:bg-gray-50 text-sm border-b"
                >
                  {Object.keys(row)
                    .filter((r) => r !== "link")
                    .map((key, colIndex) => (
                      <td key={colIndex} className="py-1">
                        {key === "title" ? (
                          <a
                            href={row["link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 underlin hover:no-underline"
                          >
                            {row[key]}
                          </a>
                        ) : (
                          row[key]
                        )}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function capitalizeFirstLetter(val:string):string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
