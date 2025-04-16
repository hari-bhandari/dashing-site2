"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/office.webp",
    width: 1920,
    height: 1080
  },
  {
    src: "/interior.webp",
    width: 1920,
    height: 1080
  }
];

interface SlideData {
  src: string;
  width: number;
  height: number;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  
  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };
  
  const { src, width, height } = slide;
  
  return (
    <li
      ref={slideRef}
      className="flex flex-1 flex-col items-center justify-center relative text-center opacity-100 transition-all duration-300 ease-in-out w-full h-[45vmin] sm:h-[40vmin]"
      style={{
        transform: current !== index ? "scale(0.98)" : "scale(1)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        display: current === index ? "flex" : "none" 
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-in-out"
          src={src}
          width={width}
          height={height}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
          alt="Office Images"
          priority={index === 0} 
        />
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
  
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
  
  const id = useId();
  
  return (
    <div 
      className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto mt-16 md:mt-24 h-[45vmin] sm:h-[40vmin]" 
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="w-full h-full">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
          />
        ))}
      </ul>
      
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}