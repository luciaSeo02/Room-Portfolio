import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Projects from "./components/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
