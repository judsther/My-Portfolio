export default function Projects() {
    const projects = [ 
      {
      title: "Emmanuel Church",
      link: "https://emmanuel-church-six.vercel.app/",
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1743712319/Screenshot_2025-04-03_at_2.30.35_PM_gyat0q.png",
      desc: "Página web en desarrollo para una iglesia con diseño moderno.",
    },
      {
        title: "Edgeline Installations",
        link: "https://www.edgelineinstallations.com",
        src: "https://res.cloudinary.com/djsdqleik/image/upload/v1743712321/Screenshot_2025-04-03_at_2.29.30_PM_d0yor8.png",
        desc: "Aplicación web básica para una empresa de carpintería especializada.",
      },
      {
        title: "My Gym Chat",
        link: "https://my-gym-chat.vercel.app/",
        src: "https://res.cloudinary.com/djsdqleik/image/upload/v1743712315/Screenshot_2025-04-03_at_2.28.43_PM_vqmedk.png",
        desc: "Aplicación de chat en tiempo real para gimnasios. Desarrollada con React y Firebase.",
      },
      {
        title: "Kodigo Star Wars",
        link: "https://kodigo-starwars.dummy.website/session",
        src: "",
        desc: "React App que explora personajes y planetas de Star Wars.",
      },
      {
        title: "Mush Store",
        link: "https://mush-beta.vercel.app",
        src: "",
        desc: "Plataforma de ventas con un diseño minimalista.",
      },
    ];
  
    return (
      <section className="px-6 pt-25 h-auto bg-gradient-to-br from-yellow-200 to-pink-100 text-gray-900 text-center">
        <div className="md:pb-40">
        <h2 className="text-4xl font-bold mb-10 text-zinc-800">Proyectos</h2>
<div className="flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 pb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white shadow-lg rounded overflow-hidden transform hover:scale-105 transition duration-300 md:w-[500px] md:h-[300px]"
            >
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <iframe
                  src={project.link}
                  className="w-[1520px] h-[1080px] scale-33 origin-top-left"
                  loading="lazy"
                  title={project.title}
                ></iframe>
              </div>
              
             
              <div className="relative z-10 transition duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
                <p className="text-zinc-600 mt-2">{project.desc}</p>
              </div>
  
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-400 font-bold relative z-20 group-hover:opacity-50 transition"
              >
                Ver Proyecto ➜
              </a>
            </div>
          ))}
        </div>
        </div>
        </div>
      </section>
      
    );
  }
  