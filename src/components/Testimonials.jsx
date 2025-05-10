import { Quote } from "lucide-react";
import line from "../assets/line.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

function Testimonials() {
  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid p-6 md:p-0 md:grid-cols-2 ">
          <div className="space-y-5">
            <div className="flex gap-5 items-center">
              <h3 className="bg-[#e3eeee] text-[#008080] font-bold px-3 py-1">TESTIMONIALS</h3>
              <img src={line} alt="" />
            </div>
            <h1 className="md:text-4xl text-3xl font-bold">What Our Customer Say</h1>
            <p>Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
          </div>
          <div className="hidden md:block"></div>
        </div>

        <div className="grid p-6 md:p-0 md:grid-cols-3 my-10 gap-14">
          <div className="border-2 border-gray-400 rounded-tl-4xl rounded-br-4xl p-10 space-y-5">
            <div className="flex gap-7">
              <img src={testimonial1} alt="" />
              <div className="space-y-1">
                <h1 className="font-bold text-xl">Grace Turner</h1>
                <p className="text-gray-400">Director</p>
              </div>
            </div>
            <p>Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community</p>
            <div className="flex justify-end">
              <Quote fill="#008080" />
            </div>
          </div>
          <div className="border-2 border-gray-400 bg-[#008080] text-white rounded-tl-4xl rounded-br-4xl p-10 space-y-5">
            <div className="flex gap-7">
              <img src={testimonial2} alt="" />
              <div className="space-y-1">
                <h1 className="font-bold text-xl">Linda Carter</h1>
                <p className="text-gray-400">Analyst</p>
              </div>
            </div>
            <p>
              Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the
              results.
            </p>
            <div className="flex justify-end">
              <Quote fill="#008080" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-tl-4xl rounded-br-4xl p-10 space-y-5">
            <div className="flex gap-7">
              <img src={testimonial3} alt="" />
              <div className="space-y-1">
                <h1 className="font-bold text-xl">Alex Walker</h1>
                <p className="text-gray-400">Attorney</p>
              </div>
            </div>
            <p>
              Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure
            </p>
            <div className="flex justify-end">
              <Quote fill="#008080" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
