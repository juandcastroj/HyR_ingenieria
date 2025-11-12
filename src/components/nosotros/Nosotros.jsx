import { CheckCircleIcon } from "lucide-react"
import { Link } from "react-router-dom"
import misionImg from "../../assets/images/nosotros/02.png"
import visionImg from "../../assets/images/nosotros/04.jpg"

export default function Nosotros ()  {

      const misionItems = [
      'Montajes en Tuberías',
      'Estructuras Metálicas',
      'Pruebas Hidrostáticas, de tintas y otras',
      'Carpintería Metálica',
      'Fabricación e instalación de Accesorios',
    ]

  return (
    <>
       {/* MISIÓN */}
        <div className="relative isolate mt-12 sm:mt-20 py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 font-Oswald bg-[#051a50] p-4 sm:p-6 shadow-xl ring-1 ring-gray-900/5 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
              <img
                alt="mision imagen"
                src={misionImg}
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-none lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-yellow-400 sm:text-5xl">
                  Misión
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-white">
                   Realizamos proyectos de Ingeniería Civil y Mecánica generando credibilidad y compromiso implementando estándares de calidad y seguridad.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-100 sm:grid-cols-2"
                >
                  {misionItems.map((item) => (
                    <li key={item} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-5 flex-none text-white"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <Link
                    to="/proyectos"
                    className="text-sm/6 font-semibold text-white hover:text-blue-300 z-20"
                  >
                    Mira nuestros proyectos
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/* VISIÓN */}
        <div className="relative isolate mt-6 pb-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 font-Oswald bg-[#051a50] p-4 sm:p-6 shadow-xl ring-1 ring-gray-900/5 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
              <img
                alt="vision imagen"
                src={visionImg}
                className="h-96 w-full flex-none rounded-3xl object-cover shadow-none lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-yellow-400 sm:text-5xl">
                  Visión
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-white">
                  Proveerá soluciones innovadoras y nuestro equipo desarrollará y empleará una variedad de técnicas y enfoques para agregar valor a nuestros proyectos.                
                </p>
                <p className="mt-6 text-lg/8 text-pretty text-white">
                  Líderes en la ejecución de proyectos de montajes en tubería y estructuras metálicas en Colombia.
                </p>

     
                <div className="mt-10 flex cursor-pointer">
                  <Link
                    to="/servicios"
                    className="text-sm/6 font-semibold text-white hover:text-blue-300"
                  >
                    Conoce nuestros servicios
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}