import bachground from "../../assets/images/nosotros/01.jpg";

export default function IntegrityBanner () {
  
  return (
    <div className="relative isolate overflow-hidden w-full h-2/3 bg-cover bg-center backdrop-brightness-50" 
        style={{ backgroundImage: `url(${bachground})` }}>

            {/* <div className="absolute inset-0 bg-[#051a50] bg-opacity-90"></div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 font-Oswald">
        <div className="mx-auto max-w-2xl py-12 sm:py-20 lg:px-12 text-cente">
          <h1 className="text-4xl font-semibold sm:text-5xl text-yellow-400"> 
                INTEGRIDAD 🤝
          </h1>
          <div className="mt-6 text-xl font-semibold text-white">
            <p>
                Todos nuestros proyectos los llevamos a cabo con estándares éticos, preservando la cultura única de H&R para construir una organización más sólida, determinada y apasionada. Creamos un entorno seguro e inspirador para que nuestro talento humano desarrolle sus habilidades, permitiéndoles a su vez contribuir al mayor desarrollo y crecimiento de nuestra organización.            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}