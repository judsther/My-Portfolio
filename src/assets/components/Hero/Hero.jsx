import { Link } from "react-router-dom";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiPhp,
  SiGit,
  SiFirebase,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";
//import HeroCharacter from "./HeroCharacter";



export default function Hero() {
  return (
    <>
      <section className="h-auto md:pb-0 bg-gradient-to-br from-yellow-200 to-pink-100 text-zinc-600 flex flex-col items-center justify-center text-center">
        {/*<HeroCharacter/> Not ready*/}
        <section className="flex flex-col items-center justify-center z-10">
          {/* Imagen de perfil */}
          <div className="md:pt-21 pt-25">
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://res.cloudinary.com/djsdqleik/image/upload/v1741056587/pict250130_0258330000_ksx2wk.jpg"
                alt="Judith Guardado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="pb-14">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-extrabold mt-14">
              ¡Hola, soy Judith Guardado!
            </h1>
            <p className="text-xl mt-2 font-semibold">
              Web Developer | Full Stack Jr.
            </p>

            {/* Iconos de habilidades */}
            <div className="flex items-center justify-center py-3 px-2 md:px-0">
              <div className="flex gap-3 md:gap-10 text-3xl text-zinc-100 bg-zinc-600 rounded-full p-4 md:px-6">
                <SiJavascript className="" />
                <SiReact className="" />
                <SiNextdotjs className="" />
                <SiVite className="" />
                <SiTailwindcss className="" />
                <SiBootstrap className="" />
                <SiGit className="" />
                <SiFirebase className="" />
                <SiPhp className="" />
                <SiLaravel className="" />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col items-center justify-center px-8 ">
              <p className="mt-4 px-3 md:px-50  text-lg text-zinc-700">
                Desarrolladora Full Stack Jr buscando aportar soluciones
                creativas y eficientes para la digitalización de empresas por
                medio de páginas/aplicaciones web completas. Abierta a aportar
                con mi trabajo a causas que impacten positivamente en la
                sociedad. Siempre en el camino de aprender y mejorar.
              </p>
            </div>
          </div>

          {/* Botón */}
          <div className="pb-18">
            <Link
              to="/proyectos"
              className="mt-6 px-8 py-3 bg-indigo-400 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transition"
            >
              Ver Proyectos
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
