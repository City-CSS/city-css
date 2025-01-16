import React from "react";

export default function Program (
    {
        icon: Icon,
        iconSize = 175,
        title,
        description
    }: {
        icon?: React.ComponentType<{ size: number; className?: string }>;
        iconSize?: number;
        title: string;
        description: string;
    }
) {
    return (
        <div
            className="rounded-2xl border border-gray-200 p-8 justify-items-center
                       hover:border-red-500 hover:shadow-lg transition-all duration-300"
        >
            {Icon && <Icon size={iconSize} className="text-gray-600" />}
            <h3 className="mt-4 font-semibold text-gray-900 ">
                {title}
            </h3>
            <p className="mt-2 text-gray-700">
                {description}
            </p>
        </div>
    );
}