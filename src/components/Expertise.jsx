import line from "../assets/line.png";
import ExpertiseImage from "../assets/ExpertiseLogo.png";

function Expertise() {
  return (
    <div className="container my-20">
      <div className="grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12 xl:gap-28">
        {/* text section */}
        <div className="space-y-7">
          <div className="flex items-center gap-5">
            <h3 className="bg-[#e3eeee] px-3 py-1 font-bold text-[#008080]">
              OUR EXPERTISE
            </h3>
            <img src={line} alt="" />
          </div>
          <div className="space-y-7">
            <h2 className="text-3xl font-bold xl:text-5xl">
              Transforming Finances <br />
              With Strategic Wealth <br /> Management
            </h2>
            <p className="text-justify">
              Guiding You on Your Global Financial Success Journey Through
              Customized & Personalized Financial Consulting Services. Achieve
              Your Goals with Data-Driven Expertise and Secure Your Financial
              Future, Successfully Navigating the Ever-Changing Finance
            </p>
            <p className="text-justify">
              We're Committed to Providing You with Expert Guidance, Proven
              Strategies & Personalized Approach to Ensure Financial Prosperity
            </p>
          </div>
          <button className="border-2 border-gray-400 p-2">
            Explore Services
          </button>
        </div>
        {/* image section */}
        <div className="rounded-tl-4xl rounded-br-4xl bg-[#e0f8f8]">
          <img src={ExpertiseImage} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
