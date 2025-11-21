import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {

    useEffect(() => {
      document.title = "HyR sas - Sitio oficial";
    }, [])

  return (
      <div className="min-h-screen relative isolate overflow-hidden items-center">
        <img
          alt="hero section background"
          src="https://static.wixstatic.com/media/50ea60_8a5927a97be849d786180f72f6760d20~mv2.jpg/v1/fill/w_1351,h_640,fp_0.50_0.39,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/50ea60_8a5927a97be849d786180f72f6760d20~mv2.jpg"
          className="absolute inset-0 -z-10 size-full object-cover filter brightness-50"
        />
   
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-48">
        
            <div className="text-center grid gap-y-8 lg:gap-y-2">
              <h1 className="text-5xl font-Oswald font-bold text-white sm:text-6xl animate-fade-down animate-duration-[2500ms] animate-delay-[500ms]">
               INGENIERÍA Y MONTAJES HyR S.A.S 
              </h1>
              <p className="mt-8 text-lg font-Oswald font-semibold text-white sm:text-xl/8 animate-fade-down animate-duration-[2500ms] animate-delay-[1000ms]">
               Realizamos proyectos de Ingeniería Civil y Mecánica generando credibilidad y compromiso implementando estándares de calidad y seguridad.
              </p>
              <div className="font-Oswald mt-10 flex items-center justify-center gap-x-6 animate-fade-down animate-duration-[2500ms] animate-delay-[1400ms]">
                <Link
                  to="/servicios"
                  className="rounded-md bg-[#11389c] px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-blue-700"
                >
                  Servicios
                </Link>
                <Link to="/proyectos" className="text-lg font-semibold text-white hover:text-gray-200">
                  Ver proyectos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
  );
}
