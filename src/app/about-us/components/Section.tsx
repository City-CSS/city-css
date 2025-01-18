import React from "react";
import Heading from "./Heading";

export default function Section(
    {

        heading,
        children,
        gridClasses,
        initialGrid = 1 // to specify the grid cols for mobile, default 1 but can be changed
    }:
{ heading: string; children: React.ReactNode; gridClasses?: string, initialGrid?: number }) {
    return (
        <div>
            <Heading title={heading} />
            <ul className={`grid grid-cols-${initialGrid} max-w-screen-xl text-base mx-6 my-12 gap-4 ${gridClasses || ""}`}>
                {children}
            </ul>
        </div>
    );
}
