import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectGallery from "../components/ProjectGallery";
import { Link } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function ProjectDetail({ lang = "en" }) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-10">Project not found</p>;
  }

  return (
    <>
      <ScrollToTop />
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">{project.title[lang]}</h2>
        {Array.isArray(project.longDescription[lang]) ? (
          project.longDescription[lang].map((para, idx) => (
            <p key={idx} className="text-gray-600 mb-6">
              {para}
            </p>
          ))
        ) : (
          <p className="text-gray-600 mb-8 whitespace-pre-line">
            {project.longDescription[lang]}
          </p>
        )}

        {project.techHighlights?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              {lang === "en"
                ? "Key Contributions & Highlights"
                : "Aportaciones y aspectos clave"}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {project.techHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight[lang]}</li>
              ))}
            </ul>
          </div>
        )}

        {project.media?.length > 0 && (
          <ProjectGallery media={project.media} title={project.title[lang]} />
        )}

        {project.links?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              {lang === "en" ? "Explore More" : "Explora más"}
            </h3>
            <div className="flex flex-col gap-3">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <Link /> {link.label[lang]}
                </a>
              ))}
            </div>
          </div>
        )}

        {project.category === "3D" && <SocialLinks lang={lang} />}

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
