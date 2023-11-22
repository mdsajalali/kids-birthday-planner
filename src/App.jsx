import Hero from "./pages/Hero/Hero"
import Navbar from "./pages/Navbar/Navbar"
import About from './pages/About/About';
import Client from "./pages/Client/Client";

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Client />
    </div>
  )
}

export default App