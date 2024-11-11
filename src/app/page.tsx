import Contact from "./components/contact";
import Cta from "./components/cta";
import Feature from "./components/feature";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className=" bg-ghostWhite overflow-visible">
      <Navbar />
      <Hero />
      <Feature />
      <Cta />
      <Contact/>
    </div>
  );
}
