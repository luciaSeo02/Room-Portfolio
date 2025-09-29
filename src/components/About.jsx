export default function About({ lang = "en" }) {
  const content = {
    en: {
      title: "About me",
      paragraphs: [
        "Hi! I’m Lucía, a fullstack web developer and 3D artist from A Coruña, Spain.",
        "I’ve always been drawn to the digital and creative world, so when the new Bachelor’s Degree in Digital Creation (2020–24) was launched, I didn’t hesitate to enroll. It was a multidisciplinary program that covered everything from film production and direction to animation, 3D, programming, and video games.",
        "During my studies I realized that what I enjoyed most was programming. I learned object-oriented programming, OpenGL, Python, Unreal Engine... and even developed small video games as part of my coursework. I also completed an internship where I was able to apply my skills in a real environment.",
        "After graduating, I decided to specialize further in web development, learning technologies such as React, Node.js, databases and version control, which gave me a solid fullstack perspective.",
        "Beyond academics, I’ve always loved creating. I share my 3D projects on Instagram, TikTok and YouTube, and I’m passionate about video games, both as a player and as an organizer: every year I volunteer at the Euskal Encounter, helping to manage tournaments and activities, which has strengthened my communication and teamwork skills.",
        "I’m currently looking for my first professional opportunity as a web developer, where I can combine my technical skills with my creative background and continue to grow as a professional.",
      ],
      skillsTitle: "Skills & Tools",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "OpenGL",
        "SQL",
        "Git & GitHub",
        "3D Modeling (Blender, ZBrush)",
        "Animation",
      ],
    },
    es: {
      title: "Sobre mí",
      paragraphs: [
        "¡Hola! Soy Lucía, desarrolladora web fullstack y artista 3D de A Coruña.",
        "Siempre me ha atraído el mundo digital y creativo, así que cuando apareció el Grado en Creación Digital (2020–24), no dudé en matricularme: era una carrera multidisciplinar que combinaba desde producción y dirección audiovisual hasta animación, 3D, programación y videojuegos.",
        "Durante esos años descubrí que la parte que más me apasionaba era la programación. Aprendí conceptos como programación orientada a objetos, OpenGL, Python, Unreal Engine... con los que incluso llegué a crear pequeños videojuegos. También realicé prácticas que me permitieron aplicar lo aprendido en un entorno real.",
        "Al graduarme decidí profundizar en el desarrollo web, formándome en tecnologías como React, Node.js, bases de datos y control de versiones, con lo que consolidé un perfil fullstack.",
        "Además de lo académico, siempre me ha gustado crear. Comparto mis proyectos 3D en redes como Instagram, TikTok y YouTube, y disfruto explorando nuevas formas de expresión digital. También soy una apasionada de los videojuegos, tanto como jugadora como organizadora: cada año participo como voluntaria en la Euskal Encounter, colaborando en la gestión de torneos y actividades, lo que me ha dado experiencia en comunicación y trabajo en equipo.",
        "Actualmente busco mi primera experiencia profesional como desarrolladora web, donde pueda unir mi perfil técnico con mi lado creativo y seguir creciendo como profesional.",
      ],
      skillsTitle: "Habilidades y herramientas",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "OpenGL",
        "SQL",
        "Git & GitHub",
        "Modelado 3D (Blender, ZBrush)",
        "Animación",
      ],
    },
  };

  return (
    <section id="about" className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-start md:gap-8">
          <img
            src="/assets/me.jpg"
            alt="Lucía"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-lg 
                       mb-6 md:mb-0 select-none pointer-events-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />

          <div className="max-w-prose">
            <h3 className="text-3xl font-bold mb-6">{content[lang].title}</h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {content[lang].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-2xl font-semibold mb-4">
            {content[lang].skillsTitle}
          </h4>
          <div className="flex flex-wrap gap-3">
            {content[lang].skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
