import React from "react";
import {FaLinkedin} from "react-icons/fa";

export default function Committee (
    {
        imageSrc,
        name,
        role,
        linkedInLink,
    }: {
        imageSrc: string;
        name: string;
        role: string;
        linkedInLink: string;
    }
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
                alt={name}
                className="rounded-2xl"
            />
            <h3 className="mt-4 font-semibold text-gray-900 text-center">
                {name}
            </h3>
            <p className="mt-2 text-gray-700 text-center">
                {role}
            </p>
            <a
                href={linkedInLink}
                // className="mt-2 text-gray-700"
                target="_blank"
                rel="noopener noreferrer">
                <div className="inline-flex items-center gap-2">
                    <FaLinkedin/>
                    LinkedIn
                </div>
            </a>
        </div>
    );
}