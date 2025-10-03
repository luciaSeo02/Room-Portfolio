import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Projects from "./components/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <>
      <LangProvider>
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
      </LangProvider>
    </>
  );
}

export default App;
