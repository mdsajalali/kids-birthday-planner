import About from "./pages/About/About";
import Client from "./pages/Client/Client";
import Contact from "./pages/Contact/Contact";
import Greeting from "./pages/Greeting/Greeting";
import Hero from "./pages/Hero/Hero";
import Services from "./pages/Services/Services";
import Supports from "./pages/Supports/Supports";
import Testimonial from "./pages/Testimonial/Testimonial";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import Wishing from "./pages/Wishing/Wishing";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Client />
      <Services />
      <Wishing />
      <Contact />
      <WhyChooseUs />
      <Greeting />
      <Testimonial />
      <Supports />
    </div>
  );
};

export default App;
