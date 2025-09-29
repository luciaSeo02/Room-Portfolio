import { HashLink } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <HashLink
          smooth
          to="/#hero"
          className="text-lg font-bold hover:text-white"
        >
          MiLogo
        </HashLink>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <HashLink smooth to="/#about" className="hover:text-white">
            About
          </HashLink>
          <HashLink smooth to="/#projects" className="hover:text-white">
            Projects
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-white">
            Contact
          </HashLink>
        </nav>
        <p className="mt-4 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} Lucía Seoane Loureda. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
