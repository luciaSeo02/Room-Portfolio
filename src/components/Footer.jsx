import { HashLink } from "react-router-hash-link";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const { lang } = useLang();

  const labels = {
    en: { about: "About me", projects: "Projects", contact: "Contact" },
    es: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <HashLink smooth to="/#hero" className="flex items-center">
          <img
            src="assets/logo03.png"
            alt="Lucía Seoane Logo"
            className="h-10 w-auto select-none pointer-events-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </HashLink>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <HashLink smooth to="/#about" className="hover:text-white">
            {labels[lang].about}
          </HashLink>
          <HashLink smooth to="/#projects" className="hover:text-white">
            {labels[lang].projects}
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-white">
            {labels[lang].contact}
          </HashLink>
        </nav>
        <p className="mt-4 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} Lucía Seoane Loureda.{" "}
          {lang === "en"
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}
