import { Mail } from "lucide-react";
import HeroImage from "../assets/HeroLogo.png";

function Hero() {
  return (
    <div>
      <div className="max-w-7xl h-[650px] p-6 md:p-0 mx-auto grid md:grid-cols-2 gap-6 md:gap-0 justify-center items-center">
        {/* text section */}
        <div className="md:space-y-7 space-y-4">
          <h1 className="md:text-7xl text-4xl font-bold drop-shadow-sm">
            Navigating the <br /> <span className="text-[#008080]">Global</span> financial landscape
          </h1>
          <p>
            Empowering Your Journey to Global Financial <br /> Success Through Customized and Personalized <br /> Financial Consulting for Every
            Client
          </p>
          <div className="flex md:gap-4 gap-2 items-center ">
            <div className="flex items-center md:gap-5 gap-2 shadow px-4 py-2 ">
              <Mail className="text-gray-500" />
              <input type="text" placeholder="Your Email Address" className="w-[150px] md:w-[250px]" />
            </div>
            <button className="bg-[#008080] text-white px-4 py-2 rounded-sm">Get Started</button>
          </div>
        </div>
        {/* image section */}
        <div className="">
          <img src={HeroImage} alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
