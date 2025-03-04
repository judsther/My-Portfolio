export default function Projects() {
    const projects = [
      {
        title: "Edgeline Installations",
        link: "https://www.edgelineinstallations.com",
        desc: "Aplicación web básica para una empresa de carpintería especializada.",
      },
      {
        title: "My Gym Chat",
        link: "https://my-gym-chat.vercel.app/",
        desc: "Aplicación de chat en tiempo real para gimnasios. Desarrollada con React y Firebase.",
      },
      {
        title: "Emmanuel Church",
        link: "https://emmanuel-church-six.vercel.app/",
        desc: "Página web en desarrollo para una iglesia con diseño moderno.",
      },
      {
        title: "Kodigo Star Wars",
        link: "https://kodigo-starwars.dummy.website/session",
        desc: "React App que explora personajes y planetas de Star Wars.",
      },
      {
        title: "Mush Store",
        link: "https://mush-beta.vercel.app",
        desc: "Plataforma de ventas con un diseño minimalista.",
      },
    ];
  
    return (
      <section className="px-6 pt-50 h-screen bg-gradient-to-br from-yellow-200 to-pink-100 text-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-10 text-zinc-800">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Miniatura de la web */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <iframe
                  src={project.link}
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                  title={project.title}
                ></iframe>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 transition duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
                <p className="text-zinc-600 mt-2">{project.desc}</p>
              </div>
  
              {/* Link visible siempre */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-400 font-bold relative z-20 group-hover:opacity-100 transition"
              >
                Ver Proyecto ➜
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  