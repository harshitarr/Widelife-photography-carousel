'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'LEOPARD',
    subtitle: 'SILENT MAJESTY',
    desc: 'Grace in every step, power in every stare — the leopard reigns wild and fearless. Untamed and elusive, it embodies the true spirit of the wild.',
    img: '/img4.jpg',
  },
  {
    title: 'BISON',
    subtitle: 'GRASSLAND KING',
    desc: 'Raw power on hooves, the bison charges with primal force. A symbol of resilience, standing bold against the wild winds.',
    img: '/img1.jpg',
  },
  {
    title: 'ELEPHANT',
    subtitle: 'ANCIENT BEAST',
    desc: 'Majestic and mighty, the elephant moves with the wisdom and strength of the wild. A gentle giant that commands awe with every thunderous step.',
    img: '/img3.jpg',
  },
  {
    title: 'PARROT',
    subtitle: 'LUSH SONGSTER',
    desc: 'Bursts of color in flight, parrots paint the skies with life. Lively and intelligent, they echo the vibrant soul of the wild.',
    img: '/img2.jpg',
  },
];

export default function CarouselPage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white font-poppins">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      {/* Main Text Content */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10 lg:px-20 pointer-events-auto">
        <div className="max-w-lg space-y-3 md:space-y-5 z-20">
          <p className="text-xs md:text-sm uppercase tracking-widest">HARSHI</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {slides[current].subtitle} <br />
            <span className="text-orange-500">{slides[current].title}</span>
          </h1>
          <p className="text-xs md:text-base">{slides[current].desc}</p>
          <button className="mt-4 text-white border border-white bg-transparent px-4 md:px-6 py-1.5 md:py-2 uppercase text-xs md:text-sm rounded hover:bg-white hover:text-black transition-colors duration-200">
            See More
          </button>
        </div>
      </div>

      {/* Bottom Thumbnail Buttons */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap md:flex-nowrap justify-center gap-2 md:space-x-4 z-20 w-[90%] md:w-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex items-center w-[85vw] md:w-64 bg-white bg-opacity-10 rounded-xl overflow-hidden backdrop-blur-sm cursor-pointer transition-transform duration-300 ${
              index === current ? 'scale-105 border border-white' : ''
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-16 h-12 md:w-20 md:h-14 object-cover"
            />
            <div className="p-2 text-white text-xs">
              <p className="font-bold">{slide.title}</p>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 bottom-6 md:bottom-12 z-30 bg-white bg-opacity-40 hover:bg-opacity-70 text-black p-2 md:p-3 rounded-full shadow"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-12 md:left-24 bottom-6 md:bottom-12 z-30 bg-white bg-opacity-40 hover:bg-opacity-70 text-black p-2 md:p-3 rounded-full shadow"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}
