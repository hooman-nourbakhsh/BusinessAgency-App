import graduation from "../assets/graduation.png";
import shield from "../assets/shield.png";
import apps from "../assets/apps.png";

function Team() {
  return (
    <div className="container my-20">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold md:text-4xl">
          Our Team Provides Valuable Services at <br /> Any Time in Any
          Situation
        </h2>
        <div className="my-10 grid gap-10 md:my-20 md:grid-cols-3 md:gap-0">
          <div className="space-y-4 pr-5 lg:pr-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#dafafc]">
              <img src={graduation} alt="" />
            </div>
            <h3 className="text-xl font-bold">Expert Guidance</h3>
            <p>
              Rely on seasoned professionals for tailored financial advice and
              strategic planning aligned with your unique goals
            </p>
            <button className="text-[#008080]">Read More</button>
          </div>
          <div className="space-y-4 pr-5 lg:pr-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fde4e4]">
              <img src={shield} alt="" />
            </div>
            <h3 className="text-xl font-bold">Risk Management</h3>
            <p>
              We expertly handle and proactively mitigate financial risks,
              ensuring the safeguard of assets and overall stability
            </p>
            <button className="text-[#008080]">Read More</button>
          </div>
          <div className="space-y-4 pr-5 lg:pr-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#dafcdf]">
              <img src={apps} alt="" />
            </div>
            <h3 className="text-xl font-bold">Customized Solutions</h3>
            <p>
              Receive and Benefit from with financial solutions that tailored to
              your unique financial challenges and aspirations
            </p>
            <button className="text-[#008080]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
