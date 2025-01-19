"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function TopBanner(
    {
        title,
        description,
        link
    } : {
        title: string,
        description: string,
        link: string
    }

) {
  // State to control the visibility of the banner
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Function to dismiss the banner
  const dismissBanner = () => {
    setIsBannerVisible(false);
  };

  // If banner is not visible, don't render anything
  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="z-20 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">{title}</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          {description}{" "}
        </p>
        <a
          href={link}
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Learn More <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={dismissBanner}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}
