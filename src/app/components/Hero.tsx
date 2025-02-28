"use client";

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-6xl">
              More than just shorter links
            </h1>
            <p className="text-gray-500 mb-6">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Get Started
            </button>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Person at computer"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
