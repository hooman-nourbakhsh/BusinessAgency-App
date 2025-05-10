import CTAImage from "../assets/CTAImage.png";
import line2 from "../assets/line2.png";

function CTA() {
  return (
    <div className="my-20 p-3 md:p-0">
      <div className="max-w-7xl mx-auto bg-[#008080] gap-10 md:gap-0 grid md:grid-cols-2 items-center rounded-tl-4xl rounded-br-4xl md:p-10 py-10 px-3">
        {/* text section */}
        <div className="space-y-10 ">
          <div className="flex gap-5 items-center">
            <h3 className="text-[#2cdfd5] font-bold px-3 py-1">START NOW</h3>
            <img src={line2} alt="" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white font-bold">Get Start For Free No Credit Card Required</h1>
          <div className="flex md:gap-5 gap-2">
            <input type="text" placeholder="Email Address" className="bg-white px-5 rounded-sm py-3 md:w-[300px]" />
            <button className="bg-[#20cfc6] text-white px-4 py-2 rounded-sm">Get Started</button>
          </div>
          <p className="text-gray-200">
            Want to contact our team and book a call? <span className="text-[#20cfc6]">Try it now</span>
          </p>
        </div>
        {/* image section */}
        <div className="">
          <img src={CTAImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CTA;
