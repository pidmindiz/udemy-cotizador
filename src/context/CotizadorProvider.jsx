import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  formaterDinero,
  obtenerDefenciaAnio
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: ""
  });
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleError = (val) => {
    console.log(val);
    setError(val);
  };

  const handleDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const cotizarSeguro = () => {
    console.log("cotizando..");
    setResultado(null);
    // Una base
    let resultado = 2000;

    // Obtener diferencia de anios
    const diferencia = obtenerDefenciaAnio(datos.year);

    // Hay que restar el 3% por cada anio
    resultado -=
      diferencia > 0 ? (diferencia * 3 * resultado) / 100 : diferencia;

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    // Basico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan);

    resultado = formaterDinero(resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleDatos,
        error,
        handleError,
        resultado,
        cotizarSeguro,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
