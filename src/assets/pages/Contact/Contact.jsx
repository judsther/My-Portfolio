import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="h-screen bg-gradient-to-br from-yellow-200 to-pink-100 text-zinc-600 flex flex-col items-center text-center justify-center">
      {/* Imagen de perfil */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="https://res.cloudinary.com/djsdqleik/image/upload/v1741056587/pict250130_0258330000_ksx2wk.jpg" 
          alt="Judith Guardado"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título */}
      <h2 className="text-4xl font-bold mt-14">Contáctame</h2>
      <p className="text-lg mt-2 text-zinc-700 m-4 md:m-0">
        ¡Hablemos! Puedes escribirme por WhatsApp, correo o en mis redes:
      </p>

      {/* Links de contacto */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-xl">
        <a
          href="https://wa.me/50371105537" 
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href="mailto:j.arevaloguardado@gmail.com"
          className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
        >
          <FaEnvelope /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/judith-arévalo-0b8487187/?trk=opento_sprofile_pfeditor" 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/judsther" // Tu GitHub ya está aquí 😃
          className="flex items-center gap-2 bg-zinc-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
