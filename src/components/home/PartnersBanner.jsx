import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import partner1 from "../../assets/images/partners/acueducto_edited.png"
import partner2 from "../../assets/images/partners/alcaldia bogota_edited.png"
import partner3 from "../../assets/images/partners/car_edited.png"
import partner4 from "../../assets/images/partners/consical_edited.png"
import partner5 from "../../assets/images/partners/ibal_edited.png"


export default function PartnersBanner() {
  return (
    <div className="bg-[#0f2f83] py-12 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base sm:text-lg/8 font-semibold text-gray-200">
          Algunos de nuestros clientes:
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1000, // ⏳ 1 segundo
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },    // móviles
            640: { slidesPerView: 3 },  // tablets
            768: { slidesPerView: 4 },  // pantallas medianas
            1024: { slidesPerView: 5 }, // pantallas grandes
          }}
          className="mt-10"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Acueducto de Bogotá"
              src={partner1}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Alcaldía de Bogotá"
              src={partner2}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Car"
              src={partner3}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Consical"
              src={partner4}
              className="object-cover h-[70px] w-[160px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Ibal"
              src={partner5}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Acueducto de Bogotá"
              src={partner1}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Alcaldía de Bogotá"
              src={partner2}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Car"
              src={partner3}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Consical"
              src={partner4}
              className="object-cover h-[70px] w-[160px]"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center">
            <img
              alt="Ibal"
              src={partner5}
              className="w-full object-contain h-[70px]"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}
