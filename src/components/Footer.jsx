import facebook from "../assets/Frame 1.png";
import twitter from "../assets/Frame 2.png";
import instagram from "../assets/Frame 3.png";

function Footer() {
  return (
    <div className="container bg-[#008080] px-4 py-6 md:px-6 md:py-12">
      <div className="text-white">
        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-16 lg:grid-cols-4 lg:gap-20">
          {/* column 1 */}
          <div className="space-y-7">
            <h2 className="text-2xl font-bold">Prosperix</h2>
            <p>
              Our expert financial consultants provide solutions to help you
              achieve financial wealth. Trust us to guide you toward a brighter
              financial future.
            </p>
            <div className="flex gap-9">
              <div className="flex gap-1">
                <img src={facebook} alt="" />
                <p className="hidden md:block">Facebook</p>
              </div>
              <div className="flex gap-1">
                <img src={twitter} alt="" />
                <p className="hidden md:block">Twitter</p>
              </div>
              <div className="flex gap-1">
                <img src={instagram} alt="" />
                <p className="hidden md:block">Instagram</p>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className="space-y-5 lg:pl-10">
            <h3 className="text-xl font-bold">Our Services</h3>
            <p>Insurance Planning</p>
            <p>Estate Planning</p>
            <p>Tax Optimization</p>
            <p>Debt Management</p>
          </div>
          {/* column 3 */}
          <div className="space-y-5 lg:pl-10">
            <h3 className="text-xl font-bold">Explore More</h3>
            <p>About us</p>
            <p>Blog</p>
            <p>Sitemap</p>
            <p>Privacy</p>
          </div>
          {/* column 4 */}
          <div className="space-y-5 lg:pl-10">
            <h3 className="text-xl font-bold">Contact Details</h3>
            <p>contact@briofin.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <hr />
        <div className="mt-5 flex flex-col items-center justify-between text-center md:flex-row">
          <p>DSCODE 2025 @ All rights reserved</p>
          <div className="flex gap-4 md:gap-7">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
