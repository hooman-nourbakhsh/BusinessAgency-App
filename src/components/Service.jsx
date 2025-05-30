import line from "../assets/line.png";
import serviceImage from "../assets/service-img.png";
import finance from "../assets/Finance.png";
import investment from "../assets/Investment.png";
import wealth from "../assets/Wealth.png";
import estate from "../assets/Estate.png";

function Service() {
  return (
    <div className="container my-20">
      <div className="grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12 xl:gap-28">
        {/* image section */}
        <div className="rounded-tl-4xl rounded-br-4xl bg-[#e0f8f8]">
          <img src={serviceImage} className="w-full" />
        </div>
        {/* text section */}
        <div className="space-y-7">
          <div className="flex items-center gap-5">
            <h3 className="bg-[#e3eeee] px-3 py-1 font-bold text-[#008080]">
              OUR SERVICE
            </h3>
            <img src={line} alt="" />
          </div>
          <div className="space-y-7">
            <h2 className="text-3xl font-bold xl:text-5xl">
              Our Services Can Help <br />
              You Grow Your <br />
              Investments and Wealth
            </h2>
            <p>
              Embark on a Journey to Unlock a World of Financial Opportunities,
              Grow Your Investment with Our Comprehensive and Expert Services
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <img src={finance} alt="" />
              <h5 className="font-semibold">Financial Planning</h5>
            </div>
            <div className="flex items-center gap-3">
              <img src={investment} alt="" />
              <h5 className="font-semibold">Investment Advisory</h5>
            </div>
            <div className="flex items-center gap-3">
              <img src={estate} alt="" />
              <h5 className="font-semibold">Estate Planning</h5>
            </div>
            <div className="flex items-center gap-3">
              <img src={wealth} alt="" />
              <h5 className="font-semibold">Wealth Management</h5>
            </div>
          </div>
          <button className="border-2 border-gray-400 p-2">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
