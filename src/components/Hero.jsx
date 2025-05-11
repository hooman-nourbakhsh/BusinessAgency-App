import { Mail } from "lucide-react";
import HeroImage from "../assets/HeroLogo.png";

function Hero() {
  return (
    <div>
      <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:grid-cols-2 md:gap-0 md:px-6 lg:mt-10">
        {/* text section */}
        <div className="space-y-4 md:space-y-7">
          <h1 className="text-4xl font-bold drop-shadow-sm lg:text-6xl xl:text-7xl">
            Navigating the <br />{" "}
            <span className="text-[#008080]">Global </span>
            financial landscape
          </h1>
          <p>
            Empowering Your Journey to Global Financial <br /> Success Through
            Customized and Personalized <br /> Financial Consulting for Every
            Client
          </p>
          <div className="flex gap-2 md:flex-col md:items-stretch md:gap-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 px-4 py-2 shadow md:gap-5">
              <Mail className="text-gray-500" />
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-[150px] md:w-[250px]"
              />
            </div>
            <button className="rounded-sm bg-[#008080] px-4 py-2 text-white">
              Get Started
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="">
          <img src={HeroImage} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
