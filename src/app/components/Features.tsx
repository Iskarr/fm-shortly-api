"use client";

import Image from "next/image";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-(--DarkViolet) w-16 h-16 rounded-full flex items-center justify-center -mt-12 mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-center">{title}</h3>
    <p className="text-gray-500 text-center text-sm">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-(--Gray) pt-40 -mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Advanced Statistics
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute h-2 bg-(--Cyan) top-1/2 left-0 right-0 z-0"></div>
          <div className="relative z-10 mt-0">
            <FeatureCard
              icon={
                <Image
                  src="/images/icon-brand-recognition.svg"
                  alt="Brand Recognition"
                  className="w-8 h-8"
                  width={0}
                  height={0}
                />
              }
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            />
          </div>
          <div className="relative z-10 mt-8 md:mt-4">
            <FeatureCard
              icon={
                <Image
                  src="/images/icon-detailed-records.svg"
                  alt="Detailed Records"
                  className="w-8 h-8"
                  width={0}
                  height={0}
                />
              }
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
          </div>
          <div className="relative z-10 mt-8 md:mt-8">
            <FeatureCard
              icon={
                <Image
                  src="/images/icon-fully-customizable.svg"
                  alt="Fully Customizable"
                  className="w-8 h-8"
                  width={0}
                  height={0}
                />
              }
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
