import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <HashLink smooth to="/#hero" className="text-xl font-bold">
          MiLogo
        </HashLink>

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          <HashLink smooth to="/#about" className="hover:text-blue-500">
            About
          </HashLink>
          <HashLink smooth to="/#projects" className="hover:text-blue-500">
            Projects
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-blue-500">
            Contact
          </HashLink>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
