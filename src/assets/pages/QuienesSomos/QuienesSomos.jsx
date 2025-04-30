import React, { useState } from "react";

const QuienesSomos = () => {
  const [activeTab, setActiveTab] = useState("historia");
  const [currentBrand, setCurrentBrand] = useState(0);

  const brands = [
    {
      id: 1,
      name: "Lenomex",
      origin: "México",
      description:
        "Línea de vajilla de melamina y cubiertos de acero inoxidable para el segmento de cafeterías, restaurantes y toda aquella institución que ofrece servicios de alimentación de manera intensiva.",
      logo: "https://placehold.co/200x100/0073BB/FFFFFF?text=Lenomex",
      category: "Vajilla profesional",
    },
    {
      id: 2,
      name: "Ilko Internacional",
      origin: "Chile",
      description:
        "Artículos para cocina y pastelería (mangas, moldes, espátulas, cucharas, rayadores, peladores), sartenes y ollas con antiadherente (pailas, ollas, sartenes, woks).",
      logo: "https://placehold.co/200x100/F3E149/000000?text=Ilko+Intl",
      category: "Utensilios de cocina",
    },
    {
      id: 3,
      name: "Plásticos Kendy",
      origin: "Chile",
      description:
        "Especializado en artículos plásticos para el hogar (cajas organizadoras, herméticos, artículos de limpieza).",
      logo: "https://placehold.co/200x100/00A4D7/FFFFFF?text=Plásticos+Kendy",
      category: "Artículos plásticos",
    },
    {
      id: 4,
      name: "Lumilagro",
      origin: "Argentina",
      description:
        "Con más de 70 años de experiencia en la fabricación de termos e isotermos para bebidas frías y calientes.",
      logo: "https://placehold.co/200x100/0073BB/FFFFFF?text=Lumilagro",
      category: "Termos e isotermos",
    },
    {
      id: 5,
      name: "Contihome",
      origin: "China",
      description:
        "Artículos varios para hogar, cafeterías, hoteles y restaurantes. Incluye entre otras cosas vajilla de porcelana, utensilios de cocina y electrodomésticos pequeños (por encargo especial).",
      logo: "https://placehold.co/200x100/F3E149/000000?text=Contihome",
      category: "Artículos para hostelería",
    },
  ];

  const nextBrand = () => {
    setCurrentBrand((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  const prevBrand = () => {
    setCurrentBrand((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-16 font-sans">
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Title with custom font style */}
        <h2 className="text-[#0073BB] text-2xl md:text-3xl font-semibold uppercase text-center mb-12 tracking-tight">
          Quiénes Somos
        </h2>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            className={`px-4 py-2  rounded-full font-bold transition-all ${
              activeTab === "historia"
                ? "bg-[#0073BB] text-white"
                : "bg-white text-[#0073BB] border-b-2 border-r-2 border-[#0073BB]"
            }`}
            onClick={() => setActiveTab("historia")}
          >
            Nuestra Historia
          </button>
          <button
            className={`px-4 py-2  rounded-full font-bold transition-all ${
              activeTab === "valores"
                ? "bg-[#0073BB] text-white"
                : "bg-white text-[#0073BB] border-b-2 border-r-2 border-[#0073BB]"
            }`}
            onClick={() => setActiveTab("valores")}
          >
            Nuestros Valores
          </button>
          <button
            className={`px-4 py-2 rounded-full font-bold transition-all ${
              activeTab === "servicios"
                ? "bg-[#0073BB] text-white"
                : "bg-white text-[#0073BB] border-b-2 border-r-2 border-[#0073BB]"
            }`}
            onClick={() => setActiveTab("servicios")}
          >
            Servicios
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Historia Tab */}
          {activeTab === "historia" && (
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h3 className="text-[#0073BB] text-2xl font-bold mb-6">
                  Nuestra Historia
                </h3>
                <p className="mb-4 leading-relaxed">
                  Importaciones Istaya S.A. de C.V. (ISTAYA, que en náhuatl
                  significa "brillar") es una empresa con más de dos décadas de
                  trayectoria en el mercado de artículos para el hogar y cocina.
                  Fundada en 2004, nació con el propósito de reintroducir marcas
                  exclusivas que anteriormente tuvieron presencia en el mercado
                  por más de 10 años. Inició sus operaciones importando vajillas
                  de cerámica desde China y, con el tiempo, amplió su portafolio
                  para incluir una variedad de productos de alta calidad. Hoy en
                  día, la empresa se enorgullece de su amplia experiencia y de
                  ofrecer artículos innovadores que satisfacen las necesidades
                  de diversos sectores, desde grandes cadenas comerciales hasta
                  pequeños negocios.
                </p>
                <p className="mb-4 leading-relaxed">
                  Con presencia en todo el territorio nacional, Istaya
                  distribuye directamente a supermercados, ferreterías,
                  almacenes mayoristas y establecimientos de hostelería, entre
                  otros. Cuenta con un equipo especializado en ventas, logística
                  propia, bodegas y personal eficiente que garantiza entregas
                  rápidas y pedidos completos. La compañía se distingue por su
                  orientación al cliente, responsabilidad y ética empresarial,
                  valores que refuerzan su compromiso con productos de calidad a
                  precios competitivos. Su estructura operativa, que incluye
                  áreas de despacho, atención personalizada y soporte postventa,
                  refleja su dinamismo y constante innovación en el sector.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#F3E149] hover:bg-[#FAC244] text-black font-bold px-4 py-2 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg">
                    Ver catálogo completo
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-[#0073BB] font-bold px-4 py-2 rounded-full border-2 border-[#0073BB] transition-all hover:-translate-y-1 hover:shadow-lg">
                    Solicitar cotización
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/600x400/00A4D7/FFFFFF?text=Importaciones+Istaya"
                  alt="Historia de Importaciones Istaya"
                  className="rounded-lg shadow-lg w-full border-4 border-[#F3E149]"
                />
              </div>
            </div>
          )}

          {/* Valores Tab */}
          {activeTab === "valores" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#0073BB" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Calidad Certificada
                </h4>
                <p className="text-gray-700">
                  Trabajamos exclusivamente con marcas internacionales de
                  reconocida trayectoria y calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#00A4D7" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Precios Competitivos
                </h4>
                <p className="text-gray-700">
                  Importación directa que nos permite ofrecer los mejores
                  precios del mercado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#F3E149" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Asesoría Especializada
                </h4>
                <p className="text-gray-700">
                  Nuestros expertos le ayudarán a seleccionar los productos
                  ideales para su negocio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#0073BB" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Logística Confiable
                </h4>
                <p className="text-gray-700">
                  Entregas puntuales en todo el territorio nacional con
                  seguimiento en tiempo real.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#00A4D7" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Variedad de Productos
                </h4>
                <p className="text-gray-700">
                  Amplio catálogo con más de 500 productos de diferentes
                  categorías.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md text-center transition-all hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#F3E149]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5"
                  style={{ backgroundColor: "#F3E149" }}
                >
                  ✓
                </div>
                <h4 className="text-[#0073BB] font-bold text-lg mb-3">
                  Experiencia
                </h4>
                <p className="text-gray-700">
                  Más de una década de experiencia en importaciones y
                  distribución mayorista.
                </p>
              </div>
            </div>
          )}

          {/* Servicios Tab */}
          {activeTab === "servicios" && (
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-6 rounded-3xl">
                <div className="md:w-1/3">
                  <img
                    src="https://placehold.co/400x300/0073BB/FFFFFF?text=Importación"
                    alt="Servicio de Importación"
                    className="rounded-lg shadow-lg w-full border-4 border-[#F3E149]"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[#0073BB] text-2xl font-bold mb-4">
                    Servicio de Importación
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Gestión integral del proceso de importación desde el país
                      de origen
                    </li>
                    <li>
                      Selección de productos según las necesidades de su mercado
                    </li>
                    <li>
                      Coordinación logística internacional (marítima y aérea)
                    </li>
                    <li>
                      Gestión aduanera y cumplimiento de regulaciones peruanas
                    </li>
                    <li>Almacenamiento temporal y distribución nacional</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-6 rounded-3xl">
                <div className="md:w-1/3 order-2 md:order-1">
                  <img
                    src="https://placehold.co/400x300/F3E149/000000?text=Distribución"
                    alt="Servicio de Distribución"
                    className="rounded-lg shadow-lg w-full border-4 border-[#0073BB]"
                  />
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                  <h3 className="text-[#0073BB] text-2xl font-bold mb-4">
                    Servicio de Distribución
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Venta al por mayor para negocios y distribuidores</li>
                    <li>
                      Entrega a nivel nacional con cobertura en principales
                      ciudades
                    </li>
                    <li>
                      Plazos de entrega competitivos según disponibilidad de
                      stock
                    </li>
                    <li>
                      Políticas flexibles para compras corporativas e
                      institucionales
                    </li>
                    <li>Soporte post-venta y seguimiento a clientes</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-6 rounded-3xl">
                <div className="md:w-1/3">
                  <img
                    src="https://placehold.co/400x300/00A4D7/FFFFFF?text=Asesoría"
                    alt="Servicio de Asesoría"
                    className="rounded-lg shadow-lg w-full border-4 border-[#F3E149]"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-[#0073BB] text-2xl font-bold mb-4">
                    Servicio de Asesoría Comercial
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Análisis de mercado y tendencias en artículos para el
                      hogar
                    </li>
                    <li>
                      Selección de productos con mayor potencial comercial
                    </li>
                    <li>Asesoría en surtido y mezcla de productos</li>
                    <li>
                      Capacitación sobre características y beneficios de los
                      productos
                    </li>
                    <li>
                      Desarrollo de planes comerciales para distribuidores
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Marcas Section (replacing testimonials) */}
        <div className="bg-gray-50 p-10 rounded-3xl border-t-4 border-[#F3E149]">
          <h3 className="text-[#0073BB] text-2xl font-bold text-center mb-10">
            MARCAS QUE COMERCIALIZAMOS
          </h3>

          <div className="flex items-center justify-center gap-5 mb-8 flex-col md:flex-row">
            <button
              onClick={prevBrand}
              className="bg-[#0073BB] hover:bg-[#00A4D7] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all order-2 md:order-1"
            >
              &lt;
            </button>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 max-w-4xl order-1 md:order-2 border-l-4 border-[#F3E149]">
              <img
                src={brands[currentBrand].logo}
                alt={brands[currentBrand].name}
                className="w-48 h-24 object-contain"
              />
              <div className="text-center md:text-left">
                <h4 className="text-[#0073BB] font-bold text-xl mb-1">
                  {brands[currentBrand].name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Origen: {brands[currentBrand].origin} | Categoría:{" "}
                  {brands[currentBrand].category}
                </p>
                <p className="mb-4">{brands[currentBrand].description}</p>
                <button className="bg-[#F3E149] hover:bg-[#FAC244] text-black font-bold px-4 py-2 rounded-full text-sm transition-all">
                  Ver productos {brands[currentBrand].name}
                </button>
              </div>
            </div>

            <button
              onClick={nextBrand}
              className="bg-[#0073BB] hover:bg-[#00A4D7] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all order-3"
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBrand(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBrand
                    ? "bg-[#F3E149] scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center h-full"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain mb-2"
                />
                <p className="text-center text-sm font-medium text-[#0073BB]">
                  {brand.name}
                </p>
                <p className="text-center text-xs text-gray-500">
                  {brand.origin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
