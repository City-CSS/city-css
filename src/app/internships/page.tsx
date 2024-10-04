"use client";

import React, { useEffect, useState } from "react";

function page() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("../../internships_table.md")
      .then((response) => response.text())
      .then((markdown) => {
        const data = parseMarkdown(markdown);
        setTableData(data);
      })
      .catch((error) => console.error("Error fetching markdown file:", error));
  }, []);

  const parseMarkdown = (markdown) => {
    const lines = markdown.trim().split("\n");
    const headers = lines[0].split("|").map((header) => header.trim());

    return lines.slice(2).map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      console.log(cells);
      let rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = cells[index];
      });
      return rowData;
    });
  };

  return (
    <div>
      <div>
        <div>INTERNSHIPS</div>
        {tableData.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.keys(row).map((key, colIndex) => (
                    <td key={colIndex}>
                      {key === "link" ? (
                        <a
                          href={row[key]}
                          target="_blank"
                          rel="noopener noreferrer"
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

export default page;
