import Hero from "./pages/Hero/Hero"
import Navbar from "./pages/Navbar/Navbar"
import About from './pages/About/About';
import Client from "./pages/Client/Client";
import Services from "./pages/Services/Services";
import Wishing from "./pages/Wishing/Wishing";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Client />
     <Services />
     <Wishing />
     <Contact />
    </div>
  )
}

export default App