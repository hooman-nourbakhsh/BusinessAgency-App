import CTAImage from "../assets/CTAImage.png";
import line2 from "../assets/line2.png";

function CTA() {
  return (
    <div className="container my-20">
      <div className="grid items-center gap-10 rounded-tl-4xl rounded-br-4xl bg-[#008080] px-4 py-10 md:grid-cols-2 md:gap-0 md:px-6">
        {/* text section */}
        <div className="space-y-10">
          <div className="flex items-center gap-5">
            <h3 className="px-3 py-1 font-bold text-[#2cdfd5]">START NOW</h3>
            <img src={line2} alt="" />
          </div>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Get Start For Free No Credit Card Required
          </h2>
          <div className="flex gap-2 lg:gap-5">
            <input
              type="text"
              placeholder="Email Address"
              className="rounded-sm bg-white px-5 py-3 lg:w-[300px]"
            />
            <button className="rounded-sm bg-[#20cfc6] px-4 py-2 text-white">
              Get Started
            </button>
          </div>
          <p className="text-sm text-gray-200 lg:text-xl">
            Want to contact our team and book a call?
            <span className="text-[#20cfc6]"> Try it now</span>
          </p>
        </div>
        {/* image section */}
        <div className="">
          <img src={CTAImage} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default CTA;
