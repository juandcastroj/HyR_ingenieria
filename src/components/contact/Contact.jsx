import { useEffect } from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Form } from './Form'

export default function Contact() {

  useEffect(() => {
    document.title = "HyR Ingeniería - Sitio oficial";
  }, [])
  
  return (
    <div className="relative isolate min-h-80 bg-[#d6f6fc]">
      <div className="mx-auto grid max-w-4xl grid-cols-1 lg:grid-cols-2 lg:pt-12 font-OpunMai">

        <div className="relative px-6 lg:static lg:px-8 py-24 sm:py-16 lg:py-28">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg font-semibold  animate-fade-right">
            <h2 className="text-4xl tracking-tight text-[#033649] sm:text-5xl">
              Contáctanos
            </h2>

            <p className="mt-6 text-base text-[#004e64] font-normal">
              Conoce más de nuestros proyectos y trabajos que actualmente estamos realizando.</p>
            <dl className="mt-4 space-y-6 text-base/7 text-gray-600">

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                </dt>
                <dd>
                  <a href="tel:+57 319 268 4463" className="text-[#033649] font-semibold">
                    +57 319 268 4463
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                </dt>
                <dd>
                  <a href="mailto:contacto@ingenieriahyr.com" className="text-[#033649] font-semibold">
                      contacto@ingenieriahyr.com                  
                    </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                </dt>
                <dd className='text-[#033649] font-semibold'>
                  Bogotá D.C, Colombia.
                </dd>
              </div>

            </dl>
          </div>
        </div>

        <Form/>
      </div>
    </div>
  )
}
