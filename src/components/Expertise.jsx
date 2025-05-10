import line from "../assets/line.png";
import ExpertiseImage from "../assets/ExpertiseLogo.png";

function Expertise() {
  return (
    <div className="my-20 ">
      <div className="max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center">
        {/* text section */}
        <div className="space-y-7">
          <div className="flex gap-5 items-center">
            <h3 className="bg-[#e3eeee] text-[#008080] font-bold px-3 py-1">OUR EXPERTISE</h3>
            <img src={line} alt="" />
          </div>
          <div className="space-y-7">
            <h2 className="md:text-5xl text-3xl font-bold">
              Transforming Finances <br />
              With Strategic Wealth <br /> Management
            </h2>
            <p>
              Guiding You on Your Global Financial Success Journey Through Customized & Personalized Financial Consulting Services. Achieve Your Goals
              with Data-Driven Expertise and Secure Your Financial Future, Successfully Navigating the Ever-Changing Finance
            </p>
            <p>We're Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity</p>
          </div>
          <button className="p-2 border-2 border-gray-400 ">Explore Services</button>
        </div>
        {/* image section */}
        <div className="bg-[#e0f8f8] rounded-br-4xl rounded-tl-4xl">
          <img src={ExpertiseImage} />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
