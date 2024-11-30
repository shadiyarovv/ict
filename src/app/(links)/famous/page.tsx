"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const famousPeople = [
  {
    name: "Abay Qunanbaiuly",
    description:
      "A poet, composer, and philosopher, Abay Qunanbaiuly is considered the father of Kazakh literature. His works emphasized education, morality, and humanism.",
    image: "/abay.png",
  },
  {
    name: "Dinmukhamed Kunaev",
    description:
      "Dinmukhamed Kunaev was a prominent political leader who played a key role in the development of Qazaqstan's economy and infrastructure.",
    image: "/kunaev.png",
  },
  {
    name: "Gennady Golovkin",
    description:
      "Known as 'GGG,' Gennady Golovkin is a world-famous professional boxer celebrated for his exceptional punching power and technique.",
    image: "/golovkin.png",
  },
];

export default function FamousPeopleSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? famousPeople.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === famousPeople.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative container mx-auto py-8">
      <div className="flex items-center justify-between">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Slideshow Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-3/4">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {famousPeople[currentIndex].name}
            </h2>
            <p className="text-gray-700">{famousPeople[currentIndex].description}</p>
          </div>

          {/* Image */}
          <img
            src={famousPeople[currentIndex].image}
            alt={famousPeople[currentIndex].name}
            className="w-72 h-72 object-cover rounded-lg"
          />
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
