import { Quote } from "lucide-react";
import line from "../assets/line.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

function Testimonials() {
  return (
    <div className="container my-20 px-4 md:px-6">
      <div className="grid md:grid-cols-2">
        <div className="space-y-5">
          <div className="flex items-center gap-5">
            <h3 className="bg-[#e3eeee] px-3 py-1 font-bold text-[#008080]">
              TESTIMONIALS
            </h3>
            <img src={line} alt="" />
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            What Our Customer Say
          </h2>
          <p>
            Discover the Success Stories and Satisfaction of Clients Who Have
            Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>
        <div className="hidden md:block"></div>
      </div>

      <div className="my-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-14">
        <div className="space-y-5 rounded-tl-4xl rounded-br-4xl border-2 border-gray-400 p-10">
          <div className="flex gap-7">
            <img src={testimonial1} alt="" />
            <div className="space-y-1">
              <h4 className="text-xl font-bold">Grace Turner</h4>
              <p className="text-gray-400">Director</p>
            </div>
          </div>
          <p>
            Financial expertise has made a significant impact on our nonprofit
            financial stability, allowing us to better serve our community
          </p>
          <div className="flex justify-end">
            <Quote fill="#008080" />
          </div>
        </div>
        <div className="space-y-5 rounded-tl-4xl rounded-br-4xl border-2 border-gray-400 bg-[#008080] p-10 text-white">
          <div className="flex gap-7">
            <img src={testimonial2} alt="" />
            <div className="space-y-1">
              <h4 className="text-xl font-bold">Linda Carter</h4>
              <p className="text-gray-400">Analyst</p>
            </div>
          </div>
          <p>
            Financial planning and investment advice I received from this team
            completely transformed my future. I couldn't be happier with the
            results.
          </p>
          <div className="flex justify-end">
            <Quote fill="#008080" />
          </div>
        </div>
        <div className="space-y-5 rounded-tl-4xl rounded-br-4xl border-2 border-gray-400 p-10">
          <div className="flex gap-7">
            <img src={testimonial3} alt="" />
            <div className="space-y-1">
              <h4 className="text-xl font-bold">Alex Walker</h4>
              <p className="text-gray-400">Attorney</p>
            </div>
          </div>
          <p>
            Estate planning is crucial, and they made the process seamless and
            stress-free. I can rest assured knowing family's future is secure
          </p>
          <div className="flex justify-end">
            <Quote fill="#008080" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
