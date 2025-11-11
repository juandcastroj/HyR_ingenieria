import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { imagesCarousel } from "../../constants/services/carousel";

export default function ServicesCarousel() {
  return (
    <div className="px-6 py-32 lg:px-8 bg-gray-50">
      <div className="mx-auto text-justify max-w-3xl lg:max-w-5xl text-base/7 text-blueText font-OpunMai">
       
        <div className="max-w-3xl mx-auto text-blue-900 font-Oswald">
          <h1 className="mt-4 text-3xl font-bold">
             INNOVACIÓN, EXPERIENCIA Y SOLUCIONES INTEGRALES.
          </h1>
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
            0: { slidesPerView: 2 }, // móviles
            640: { slidesPerView: 2 }, // tablets
            768: { slidesPerView: 2 }, // pantallas medianas
            1024: { slidesPerView: 3 }, // pantallas grandes
          }}
        >
          {imagesCarousel.map((e) => (
            <SwiperSlide key={e.id} className="mt-12">
              <img
                src={e.img}
                alt={e.caption}
                className="w-full h-72 sm:h-96 object-contain rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
