import Hero from "./pages/Hero/Hero"
import Navbar from "./pages/Navbar/Navbar"
import About from './pages/About/About';
import Client from "./pages/Client/Client";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Client />
     <Services />
    </div>
  )
}

export default App