import Lottie from "lottie-react";
import Girl from "../Girl.json";

const Hero = () => {
  return (
    <div className="flex items-center mt-48 max-w-screen-xl mx-auto">
      <div className="flex-1 space-y-5">
        <h1 className="text-[#1D50A0] text-6xl font-Poppins  font-bold leading-normal">
          
          <span className="text-transparent bg-gradient-to-r from-[#E9A52C] to-[#E7662C] bg-clip-text">
            Empowering
          </span>
          Minds, Inspiring Journeys: Explore, Learn, Grow.
        </h1>
        <p>
          There's no other place that combines such an excellent level of
          writing with a truly engaged and active community. Wavesmarathon is
          truly where ideas are born, shared and spread.
        </p>
        <button className="px-14 py-5 bg-[#F0672B] text-white font-semibold text-xl rounded-full">Get Started</button>
      </div>
      <div className="flex-1">
        <Lottie animationData={Girl} />
      </div>
    </div>
  );
};

export default Hero;
