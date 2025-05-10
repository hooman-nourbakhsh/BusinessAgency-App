import Companies from "./components/Companies";
import CTA from "./components/CTA";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Expertise />
      <Service />
      <Testimonials />
      <Team />
      <CTA />
    </>
  );
}

export default App;
