import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div >
    <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contacts/>
    </div>
  );
}

export default App;
