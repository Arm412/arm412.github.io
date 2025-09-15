import React, { useEffect, useState } from "react";
import { MediaItem, workExperiences } from "../../helpers/helpers";

type CarouselItemProps = {
  media?: MediaItem[]
};

export default function CarouselItem({
  media = []
}: CarouselItemProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevSlide = () => {
    setImageIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setImageIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div id="default-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg flex items-center justify-center bg-inherit">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          >
            {media.map((mediaItem, i) => (
              <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">
                {mediaItem.type === "image" && (
                  <img
                    src={mediaItem.src}
                    alt={mediaItem.alt || `Slide ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-[-35px] left-1/2 space-x-3 rtl:space-x-reverse">
          {media.map((mediaItem, mediaIndx) => (
            <button
              key={mediaIndx}
              type="button"
              aria-label={mediaItem.alt || `Slide ${mediaIndx + 1}`}
              onClick={() => setImageIndex(mediaIndx)}
              className={`w-3 h-3 rounded-full ${imageIndex === mediaIndx ? "bg-secondary" : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary group-hover:bg-primary group-focus:ring-4 group-focus:ring-secondary group-focus:outline-none">
            <svg className="w-4 h-4 text-textMain group-hover:text-secondary rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary group-hover:bg-primary group-focus:ring-4 group-focus:ring-secondary group-focus:outline-none">
            <svg className="w-4 h-4 text-textMain group-hover:text-secondary rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
