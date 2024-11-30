"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const nationalSymbols = [
  {
    name: "Flag of Qazaqstan",
    description:
      "The flag features a blue background symbolizing peace and unity, with a golden sun and steppe eagle representing freedom and the spirit of the nation.",
    image: "/qz.png",
  },
  {
    name: "Emblem of Qazaqstan",
    description:
      "The emblem showcases two golden shanyraks, or traditional Kazakh yurts, with a pair of mythical winged horses symbolizing courage and strength.",
    image: "/qz-emblem.png",
  },
  {
    name: "National Anthem of Qazaqstan",
    description:
      "The anthem, titled 'Menin Qazaqstanym,' reflects the pride and unity of the Kazakh people, celebrating their history and aspirations.",
    image: "/qz.png",
    audio: "/qz-anthem.mp3",
  },
];

export default function NationalSymbolsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nationalSymbols.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === nationalSymbols.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-blue-200 py-12 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="flex flex-col items-center w-3/4 text-center gap-6">
          <img
            src={nationalSymbols[currentIndex].image}
            alt={nationalSymbols[currentIndex].name}
            className="w-64 h-64 object-contain rounded-lg border-2 border-gray-300 shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {nationalSymbols[currentIndex].name}
            </h2>
            <p className="text-gray-700">
              {nationalSymbols[currentIndex].description}
            </p>
          </div>

          {nationalSymbols[currentIndex].audio && (
            <audio controls className="mt-4">
              <source
                src={nationalSymbols[currentIndex].audio}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
