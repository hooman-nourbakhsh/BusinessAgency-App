import amazon from "../assets/amazon.png";
import airbnb from "../assets/airbnb.png";
import fedex from "../assets/fedex.png";
import ripple from "../assets/ripple.png";
import stripe from "../assets/stripe.png";
import walmart from "../assets/walmart.png";

function Companies() {
  return (
    <div className="container mt-20 px-4 md:px-6">
      <div className="flex flex-wrap items-center justify-center gap-4 grayscale-100 md:grid md:grid-cols-6 md:gap-0">
        <img src={walmart} className="w-[100px] md:w-[150px]" />
        <img src={fedex} className="w-[100px] md:w-[150px]" />
        <img src={amazon} className="w-[100px] md:w-[150px]" />
        <img src={stripe} className="w-[100px] md:w-[150px]" />
        <img src={airbnb} className="w-[100px] md:w-[150px]" />
        <img src={ripple} className="w-[100px] md:w-[150px]" />
      </div>
    </div>
  );
}

export default Companies;
