import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../constants/services';

export default function Services() {

    useEffect(() => {
      document.title = "Servicios HyR";
    }, []);

  return (
    <div className="bg-white">
      <section aria-labelledby="services-heading" className="relative">
        <img
          alt=""
          src="https://static.wixstatic.com/media/50ea60_37e21eeaf8fd48e4a78d36e588c6394e~mv2.jpg/v1/fill/w_662,h_1280,al_c,q_85,enc_avif,quality_auto/50ea60_37e21eeaf8fd48e4a78d36e588c6394e~mv2.jpg"
          className="aspect-3/2 w-full object-cover sm:aspect-5/2 lg:absolute lg:aspect-auto h-2/3 lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
        />

        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            {/* <h2 id="services-heading" className="font-medium text-gray-500">
              Nuestros Servicios
            </h2> */}
            <p className="mt-4 text-4xl font-Oswald font-bold text-blue-900">Nuestros Servicios</p>
            {/* <p className="mt-4 text-gray-500">
              We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
              use.
            </p> */}

            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 text-sm sm:grid-cols-2 font-Oswald">
              {services.map((service) => (
                <div key={service.name}>

                  {/* <svg className='w-6' preserveAspectRatio="xMidYMid meet" data-bbox="0.006 3.6 199.986 193" xmlns="http://www.w3.org/2000/svg" viewBox="0.006 3.6 199.986 193" role="presentation" aria-hidden="true">
                      <g>
                          <path d="M40.5 196.6c-2.5 0-5-.8-7.2-2.4-4.3-3.1-6-8.4-4.4-13.5l15-53.3c.8-2.5 0-5-2-6.5l-37-28.6C.7 89.2-1 83.9.6 78.9c1.6-5 6-8.2 11.1-8.3l52-7c2.4 0 4.6-1.6 5.4-3.9l19.5-48.1c1.5-4.8 6-8 11.4-8 5.3 0 9.7 3.2 11.4 8.1l19.9 47.6c.9 2.7 3 4.2 5.5 4.2h.5l50.9 6c5.2.1 9.6 3.4 11.2 8.3 1.6 5.1-.1 10.4-4.4 13.5l-40.4 30.6c-2 1.5-2.9 4-2.1 6.3l17.8 52.5c1.7 5.1-.1 10.4-4.4 13.5-4.2 3.1-9.7 3.1-14 .1L101.8 165c-2-1.4-4.6-1.4-6.6 0l-48 29.3c-2 1.5-4.3 2.3-6.7 2.3zm66.2-38.7l50.1 29.3c1.9 1.4 3.5.3 4 0s2-1.6 1.2-3.8l-17.8-52.5c-1.9-6 .1-12.4 5.2-16l40.4-30.6c1.9-1.4 1.5-3.3 1.3-3.9-.2-.6-.9-2.4-3.3-2.4h-.5l-50.9-6c-6.1-.1-11.4-4-13.3-9.9l-19.9-47.7c-.7-2.2-2.7-2.4-3.3-2.4-.6 0-2.5.2-3.3 2.4L77.2 62.6c-1.8 5.5-7.1 9.4-13.2 9.6l-52 7c-2.3 0-3.1 1.8-3.3 2.4-.2.6-.6 2.5 1.2 3.8L47.1 114c4.9 3.6 7 10 5.1 15.9l-15 53.3c-.8 2.4.7 3.6 1.2 4 .5.3 2.2 1.4 4 0l48-29.3c4.7-3.4 11.3-3.5 16.3 0z"></path>
                      </g>
                  </svg> */}
                  <dt className="text-base font-semibold text-blue-900">{service.name}</dt>
                  <dd className="mt-2 text-gray-500">{service.description}</dd>
                  <dd className="mt-2 text-blue-900 font-semibold">{service.attendant}</dd>
                  <dd className="mt-2 text-gray-500">{service.contact}</dd>

                  <dd className='mt-6'>
                      <Link
                        to="/contacto"
                        className="rounded-md bg-[#11389c] px-3.5 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-blue-700"
                      >
                        Contactar
                      </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
