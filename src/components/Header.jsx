import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLang } from "../context/LangContext";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLang();

  const labels = {
    en: { about: "About me", projects: "Projects", contact: "Contact" },
    es: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <HashLink smooth to="/#hero" className="flex items-center">
          <img
            src="assets/logo02.png"
            alt="Lucía Seoane Logo"
            className="h-10 w-auto select-none pointer-events-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </HashLink>

        <nav className="hidden md:flex space-x-6 items-center">
          <HashLink smooth to="/#about" className="hover:text-blue-500">
            {labels[lang].about}
          </HashLink>
          <HashLink smooth to="/#projects" className="hover:text-blue-500">
            {labels[lang].projects}
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-blue-500">
            {labels[lang].contact}
          </HashLink>

          <div className="flex items-center space-x-3 ml-4">
            <button onClick={() => setLang("en")}>
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  opacity: lang === "en" ? 1 : 0.5,
                }}
                title="English"
              />
            </button>
            <button onClick={() => setLang("es")}>
              <ReactCountryFlag
                countryCode="ES"
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  opacity: lang === "es" ? 1 : 0.5,
                }}
                title="Español"
              />
            </button>
          </div>
        </nav>

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
                {labels[lang].about}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>
                {labels[lang].projects}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
                {labels[lang].contact}
              </HashLink>
            </li>

            <li className="flex justify-center space-x-6 pt-3">
              <button onClick={() => setLang("en")}>
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{
                    width: "1.8em",
                    height: "1.8em",
                    opacity: lang === "en" ? 1 : 0.5,
                  }}
                  title="English"
                />
              </button>
              <button onClick={() => setLang("es")}>
                <ReactCountryFlag
                  countryCode="ES"
                  svg
                  style={{
                    width: "1.8em",
                    height: "1.8em",
                    opacity: lang === "es" ? 1 : 0.5,
                  }}
                  title="Español"
                />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
