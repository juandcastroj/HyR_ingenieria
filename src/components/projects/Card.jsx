import { Building2, Calendar, CheckCircle, Hammer } from "lucide-react";

export default function Card({ data }) {
  if (!data) return null;

  const { title, client, year, description, tasks } = data;

  return (
    <div className="max-w-[25rem] mx-auto p-6 md:p-10 bg-white shadow-xl rounded-2xl border border-gray-100 space-y-3 font-Oswald">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-900 flex items-center gap-2">
          <Hammer className="w-7 h-7 text-blue-800" /> {title}
        </h2>
      </div>

      {/* Año */}
      <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
        <Calendar className="w-4 h-4 text-blue-700" />
        {year}
      </div>

      {/* Entidad */}
      <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
        <Building2 className="w-4 h-4 text-blue-700" />
        <span className="font-normal text-gray-700">Entidad Contratante:</span>
        <span className="font-semibold text-blue-900"> {client} </span>
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      {/* Lista dinámica */}
      <ul className="mt-4 space-y-2">
        {tasks?.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700 text-sm md:text-sm"
          >
            <CheckCircle className="w-5 h-5 text-blue-800 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}