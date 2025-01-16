import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

// @ts-ignore
export default function Event (
    {
        imageSrc,
        title,
        date,
        description

    }: { imageSrc: string; title: string; date: string; description: string }
) {
    return (
        <div
            className="rounded-2xl border border-gray-200 p-4 justify-items-center
                       hover:border-red-500 hover:shadow-lg transition-all duration-300"
        >
            <img
                width={175}
                height={175}
                src={imageSrc}
                alt={title}
                className="rounded-2xl"
            />
            <h3 className="mt-4 font-semibold text-gray-900 text-center">
                {title}
            </h3>
            <p className="mt-2 text-gray-700 inline-flex items-center gap-2 ">
                <FaCalendarAlt/> {date}
            </p>
            <p className="mt-2 text-gray-900">
                {description}
            </p>
        </div>
    );
}