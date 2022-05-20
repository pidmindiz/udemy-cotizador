import { MARCAS, PLANES, YEARS } from "../constants";
import _ from "lodash";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { datos, handleDatos, error, handleError, cotizarSeguro } = useCotizador();
  const { marca, year, plan } = datos;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(datos).includes("")) {
      handleError("Todos los campos son obligatorios");
    } else {
      handleError(null);
      cotizarSeguro();
    }
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>

          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            value={marca}
            onChange={(e) => handleDatos(e)}
          >
            <option value="">-- Seleccionar Marca --</option>
            {_.map(MARCAS, (m, k) => (
              <option key={k} value={m.id}>
                {m.nombres}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Anio
          </label>

          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            value={year}
            onChange={(e) => handleDatos(e)}
          >
            <option value="">-- Seleccionar Anio --</option>
            {_.map(YEARS, (m, k) => (
              <option key={k} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            className="block mb-3 font-bold text-gray-400 uppercase"
            htmlFor=""
          >
            Elige un plan
          </label>

          <div className="flex gap-3 items-center">
            {_.map(PLANES, (plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombres}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
