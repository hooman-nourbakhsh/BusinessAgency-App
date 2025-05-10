import amazon from "../assets/amazon.png";
import airbnb from "../assets/airbnb.png";
import fedex from "../assets/fedex.png";
import ripple from "../assets/ripple.png";
import stripe from "../assets/stripe.png";
import walmart from "../assets/walmart.png";

function Companies() {
  return (
    <div className="mt-20 p-6 md:p-0">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 md:gap-0 md:grid md:grid-cols-6 grayscale-100">
        <img src={walmart} className="w-[100px] md:w-[150px] " />
        <img src={fedex} className="w-[100px] md:w-[150px] " />
        <img src={amazon} className="w-[100px] md:w-[150px] " />
        <img src={stripe} className="w-[100px] md:w-[150px] " />
        <img src={airbnb} className="w-[100px] md:w-[150px] " />
        <img src={ripple} className="w-[100px] md:w-[150px] " />
      </div>
    </div>
  );
}

export default Companies;
