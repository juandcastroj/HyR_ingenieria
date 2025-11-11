import { InformationCircleIcon } from '@heroicons/react/20/solid'
import teamImg from "../../assets/images/nosotros/01.jpg"

export default function MainInfo() {
  return (
    <div className="px-6 py-8 sm:py-16 lg:px-8 bg-[#051a50] font-Oswald">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-100">

        <div className="">

          <figure className="mt-10 border-l-2 border-gray-200 pl-9 transition animate-fade-right animate-duration-[2500ms] animate-delay-[1000ms]">
            <blockquote className="font-semibold text-gray-100">
              <p>
                Contamos con MATERIALES y TALENTO HUMANO
                que proporcionan la EFICIENCIA y CONFIANZA
                necesaria para mantener tu proyecto en marcha.
              </p>
            </blockquote>
          </figure>

          <figure className="mt-16 flex flex-col animate-fade-right animate-duration-[2500ms] animate-delay-[1000ms]">
              <img
                  alt="Nuestro equipo"
                  src={teamImg}
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-white">
                  <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-white"/>
                  Nuestro equipo.
              </figcaption>
          </figure>
        </div>
  
      </div>
    </div>
  )
}
