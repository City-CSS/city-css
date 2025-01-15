"use client";

import React, { useState } from 'react';

export default function ImageGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    // Function to handle next and previous buttons
    const handleScroll = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
        }
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Image Display */}
            <div className="overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Gallery Image ${currentIndex + 1}`}
                    className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out opacity-100"
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => handleScroll('prev')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ◀
            </button>

            <button
                onClick={() => handleScroll('next')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ▶
            </button>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-8 h-1 rounded-md transition-colors duration-500 ease-in-out ${
                            currentIndex === index
                                ? 'bg-gray-800' // Active line color
                                : 'bg-gray-300' // Inactive line color
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
