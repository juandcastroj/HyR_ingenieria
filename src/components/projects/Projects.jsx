import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import Swipper from "./Swipper";

import { dataPtar } from "../../constants/projects/ptar";
import { dataIbague } from "../../constants/projects/ibague";

import { imagesPtar } from "../../constants/projects/ptar";
import { imagesIbague } from "../../constants/projects/ibague";

import { dataSoacha } from "../../constants/projects/soacha";
import { imagesSoacha } from "../../constants/projects/soacha";

import { dataRedMatriz } from "../../constants/projects/redMatriz";
import { imagesRedMatriz } from "../../constants/projects/redMatriz";

import { dataAeropuerto } from "../../constants/projects/aeropuerto";
import { imagesAeropuerto } from "../../constants/projects/aeropuerto";

import { dataConjunto } from "../../constants/projects/conjunto";
import { imagesConjunto } from "../../constants/projects/conjunto";

export default function Projects() {

  useEffect(() => {
    document.title = "Proyectos - HyR sas";
  }, []);

  return (
    <div className="px-6 lg:px-10 py-32 bg-gray-50">

      <div className="max-w-3xl mx-auto text-blue-900 text-center font-Oswald">
        <h1 className="text-3xl font-bold">
          Nuestros proyectos
        </h1>
        <p className="mt-4">
          Nuestro equipo tiene la experiencia y los conocimientos disponibles para completar con éxito proyectos simples y complejos de ingeniería civil y mecánica.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataPtar}/>
        <Swipper images={imagesPtar} />
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataIbague}/>
        <Swipper images={imagesIbague} />
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataSoacha}/>
        <Swipper images={imagesSoacha} />
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataRedMatriz}/>
        <Swipper images={imagesRedMatriz} />
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataAeropuerto}/>
        <Swipper images={imagesAeropuerto} />
      </div>

      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-3xl sm:max-w-6xl">
        <Card data={dataConjunto}/>
        <Swipper images={imagesConjunto} />
      </div>

    </div>
  );
}
