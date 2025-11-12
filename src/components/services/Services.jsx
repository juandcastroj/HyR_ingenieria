import { useEffect } from 'react';
import { services } from '../../constants/services/services';
import mainImg from "../../assets/images/services/services.png";

export default function Services() {

    useEffect(() => {
      document.title = "Servicios HyR";
    }, []);

  return (
    <div className="bg-white">

      <section aria-labelledby="services-heading" className="relative">
        <img
          alt="Services general image"
          src={mainImg}
          className="aspect-3/2 w-full object-cover sm:aspect-5/2 lg:absolute lg:aspect-auto h-2/3 lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
        />

        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-Oswald font-bold text-blue-900">Nuestros Servicios</p>

            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 text-sm sm:grid-cols-2 font-Oswald">
              {services.map((service) => {
                    const {name, description, attendant, contact, wapp} = service;

                return (
                <div key={name}>
                  <dt className="text-base font-semibold text-blue-900">{name}</dt>
                  <dd className="mt-2 text-gray-500">{description}</dd>
                  <dd className="mt-2 text-blue-900 font-semibold">{attendant}</dd>
                  <dd className="mt-2 text-gray-500">{contact}</dd>
                  <dd className='mt-6'>
                      <a
                        href={`https://wa.me/` + wapp}
                        className="rounded-md bg-[#11389c] px-3.5 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-blue-700"
                      >
                        Contactar
                      </a>
                  </dd>
                </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

    </div>
  )
}
