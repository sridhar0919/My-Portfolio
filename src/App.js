import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import OtherProjects from './components/OtherProjects';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
    </div>
  );
}

export default App;
