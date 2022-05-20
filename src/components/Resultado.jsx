import _ from "lodash";
import React from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  if (!resultado) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">
          Marca: {_.find(MARCAS, { id: Number(marca) }).nombres}
        </span>
      </p>
      <p className="my-2">
        <span className="font-bold">Years: {year}</span>
      </p>
      <p className="my-2">
        <span className="font-bold">
          Planes: {_.find(PLANES, { id: Number(plan) }).nombres}
        </span>
      </p>
      <p className="my-2">
        <span className="font-bold text-3xl">{resultado}</span>
      </p>
    </div>
  );
};

export default Resultado;
