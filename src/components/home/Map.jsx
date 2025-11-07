import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Map() {
    return (
    <div className="bg-[#d0e6ff] py-16 lg:py-24">
      <div className="mx-auto grid max-w-5xl reve grid-cols-1 lg:grid-cols-2 gap-9">

            <div className="relative px-6 lg:static lg:px-8 py-12 sm:py-8 lg:py-0">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg animate-fade-down sm:animate-fade-left">
                    <h2 className="text-4xl font-medium text-[#033649] sm:text-5xl">
                    Contáctanos
                    </h2>

                    <p className="mt-6 text-base font-semibold text-[#004e64]">
                    Conoce nuestras instalaciones y cómo ayudamos a crear más iniciativas en beneficio de la comunidad.  <br/>
                    ¡Escríbenos para programar tu visita! </p>
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
                            Carrera 78A # 65 Sur - 15 Bogotá D.C, Colombia.
                        </dd>
                    </div>

                    </dl>
                </div>
            </div>

            <div className="flex justify-center">
                <iframe title="HyR sas location" className="h-[12rem] sm:h-[20rem] w-96 sm:w-[44rem] hover:border-4 border-blueText shadow-xl animate-fade-down sm:animate-fade-right animate-duration-[2500ms] animate-delay-[500ms] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.960275873084!2d-74.18497362589386!3d4.6011377425144575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e5acde8e901%3A0x91bd7baaaa1cc4c8!2zQ3JhLiA3OGEgIyA2NS00MiwgQm9zYSwgQm9nb3TDoSwgRC5DLiwgQm9nb3TDoSwgQm9nb3TDoSwgRC5DLg!5e0!3m2!1sen!2sco!4v1762471333969!5m2!1sen!2sco" 
                     allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </div>
    )
}
