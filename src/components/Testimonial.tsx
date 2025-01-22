'use client';

import React, { useState, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const testimonials = [
  {
    quote: "I can easily find everything I need and complete my purchases quickly, thanks to the smooth and user-friendly experience.",
    author: "Anonymous",
    company: "SHOPPING WEBSITE USER",
  },
  {
    quote: "The shopping website has everything I want at great prices. It's my go-to for all online shopping needs!",
    author: "Anonymous",
    company: "LOYAL CUSTOMER",
  },
  {
    quote: "I love the variety of products and how fast the delivery is. Shopping online has never been this easy.",
    author: "Anonymous",
    company: "HAPPY SHOPPER",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-14 flex justify-center px-4 md:px-8 mb-16">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
        {/* Left section */}
        <div className="w-full md:w-1/4 lg:w-[500px] h-auto md:h-[300px] mt-12">
          <div className="bg-nude p-10 rounded-lg shadow-2xl border-4 border-gray-50 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              What our Clients<br />
              Say about<br />
              Shopping Website
            </h2>
          </div>
        </div>

        {/* Right section - Testimonial carousel */}
        <div className="w-full md:w-2/3 lg:w-[600px] h-auto md:h-[300px]">
          <div className="h-full bg-white p-8 rounded-lg shadow-2xl border-4 border-gray-50 flex flex-col">
            {/* Testimonial content */}
            <div className="flex flex-col gap-4 mb-4">
              {/* Quote icon */}
              <div className="text-3xl md:text-4xl font-serif text-gray-300">"</div>
              {/* Comment */}
              <p className="text-base md:text-lg">{testimonials[currentSlide].quote}</p>
            </div>

            {/* Profile and Navigation Section */}
            <div className="mt-auto flex justify-between items-center">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium">{testimonials[currentSlide].author}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentSlide].company}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-1 items-center">
                {/* Dots for navigation */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-300"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-2 ml-28">
                  <button
                    onClick={prevSlide}
                    className="p-3 hover:bg-gray-100 rounded-full"
                    aria-label="Previous testimonial"
                  >
                    <CiCircleChevLeft className="text-2xl md:text-3xl" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 hover:bg-gray-100 rounded-full"
                    aria-label="Next testimonial"
                  >
                    <CiCircleChevRight className="text-2xl md:text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
