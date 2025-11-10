import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { projectsImages } from "../../constants/projects";
import { Building2, Calendar, CheckCircle, Hammer } from "lucide-react";

export default function Projects() {
  useEffect(() => {
    document.title = "Proyectos - HyR sas";
  }, []);

  return (
    <div className="px-6 py-32 lg:px-8 bg-[#d5f8ff]">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl">
        <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white shadow-xl rounded-2xl border border-gray-100 space-y-3">
          {/* Header */}
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-900 flex items-center gap-2">
              <Hammer className="w-7 h-7 text-blue-800" /> PTAR
            </h2>
          </div>

          {/* Año */}
          <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
            <Calendar className="w-4 h-4 text-blue-700" />
            2020 - 2021
          </div>

          {/* Entidad */}
          <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span className="font-normal text-gray-700">
              Entidad Contratante:
            </span>
            <span className="font-semibold text-blue-900"> CEPS </span>
          </div>

          {/* Objeto */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-sm font-semibold text-blue-900">
              Objeto:
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Obras de expansión en la Planta de tratamiento de aguas residuales
              Ptar - Salitre.
            </p>
          </div>

          {/* Lista */}
          <ul className="mt-4 space-y-2">
            {[
              "Instalación de compuertas",
              "Ajuste de puentes giratorios",
              "Mantenimientos generales",
              "Reparación de pintura",
              "Bombeo de aguas",
              "Fabricación de piezas especiales",
              "Instalación de membranas aireadoras",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-sm"
              >
                <CheckCircle className="w-5 h-5 text-blue-800 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation
          loop={true}
          autoplay={{
            delay: 2500, // ⏳ 2.5 segundos
            disableOnInteraction: false, // sigue aunque el usuario toque
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // móviles
            640: { slidesPerView: 2 }, // tablets
            768: { slidesPerView: 2 }, // pantallas medianas
            1024: { slidesPerView: 2 }, // pantallas grandes
          }}
        >
          {projectsImages.map((e) => (
            <SwiperSlide key={e.id} className="mt-12">
              <img
                src={e.img}
                alt={e.caption}
                className="w-full h-72 sm:h-80 object-contain sm:object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
