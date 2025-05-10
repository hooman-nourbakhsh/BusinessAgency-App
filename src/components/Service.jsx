import line from "../assets/line.png";
import serviceImage from "../assets/service-img.png";
import finance from "../assets/Finance.png";
import investment from "../assets/Investment.png";
import wealth from "../assets/Wealth.png";
import estate from "../assets/Estate.png";

function Service() {
  return (
    <div className="my-20 ">
      <div className="max-w-7xl mx-auto grid p-6 md:p-0 md:grid-cols-2 gap-28 items-center">
        {/* image section */}
        <div className="bg-[#e0f8f8] rounded-br-4xl rounded-tl-4xl">
          <img src={serviceImage} />
        </div>
        {/* text section */}
        <div className="space-y-7">
          <div className="flex gap-5 items-center">
            <h3 className="bg-[#e3eeee] text-[#008080] font-bold px-3 py-1">OUR SERVICE</h3>
            <img src={line} alt="" />
          </div>
          <div className="space-y-7">
            <h2 className="md:text-5xl text-3xl font-bold">
              Our Services Can Help <br />
              You Grow Your <br />
              Investments and Wealth
            </h2>
            <p>Embark on a Journey to Unlock a World of Financial Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-3 items-center">
              <img src={finance} alt="" />
              <h5 className="font-semibold">Financial Planning</h5>
            </div>
            <div className="flex gap-3 items-center">
              <img src={investment} alt="" />
              <h5 className="font-semibold">Investment Advisory</h5>
            </div>
            <div className="flex gap-3 items-center">
              <img src={estate} alt="" />
              <h5 className="font-semibold">Estate Planning</h5>
            </div>
            <div className="flex gap-3 items-center">
              <img src={wealth} alt="" />
              <h5 className="font-semibold">Wealth Management</h5>
            </div>
          </div>
          <button className="p-2 border-2 border-gray-400 ">Explore Services</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
