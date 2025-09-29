import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.json";

export default function Projects() {
  const lang = "en";
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        {lang === "en" ? "Projects" : "Proyectos"}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            shortDescription={project.shortDescription}
            mainImage={project.mainImage}
            tags={project.tags}
            lang={lang}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}
