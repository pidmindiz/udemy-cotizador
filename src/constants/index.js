export const MARCAS = [
  { id: 1, nombres: "Europeo" },
  { id: 2, nombres: "Americano" },
  { id: 3, nombres: "Asiatico" }
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index);

export const PLANES = [
    { id: 1, nombres: "Basico" },
    { id: 2, nombres: "Completo" }
  ];