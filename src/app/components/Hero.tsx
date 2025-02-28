"use client";

const Hero = () => {
  return (
    <div className="pt-40 mb-40 lg:mb-50">
      {/* Added overflow-hidden and increased bottom padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added padding */}
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          {/* Changed flex-col to flex-col-reverse for mobile */}
          <div className="md:w-3/5 z-10 mt-16 md:mt-0 text-center md:text-left">
            {/* Added top margin for mobile spacing and centered text on mobile only */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-6xl">
              More than just shorter links
            </h1>
            <p className="text-gray-500 text-lg">
              {/* Increased margin-bottom and font size */}
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="flex justify-center md:justify-start">
              {/* Center the button on mobile */}
              <button className="bg-(--Cyan) hover:bg-teal-600 text-white font-medium py-3 px-12 rounded-full transition-colors mb-16 mt-8 md:mb-0">
                {/* Added margin-bottom on mobile */}
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-2/5 md:absolute right-40 md:translate-x-1/4">
            {/* Positioned absolutely on desktop to allow overflow */}
            <img
              src="/images/illustration-working.svg"
              alt="Person at computer"
              className="w-full hero-img scale-120 ml-16 max-[768]:ml-24 max-[475px]:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
