import data from "../data/data.json";
import { buttonText, subText, text } from "../data/frases";

export const calcularCuota = (precio) => {
  const precioCuota = (
    precio.substring(1).replace(",00", "").replace(".", "") / 6
  ).toFixed(2);
  return precioCuota;
};

export const obtenerProductosAleatorios = (cantidad) => {
  return data.sort(() => Math.random() - Math.random()).slice(0, cantidad);
};

export const obtenerProductosAleatoriosBigCards = (cantidad) => {
  return data
    .sort(() => Math.random() - Math.random())
    .slice(0, cantidad)
    .map((e) => {
      return {
        id: e.id,
        foto: e.foto,
        text: text.sort(() => Math.random() - Math.random())[0],
        subText: subText.sort(() => Math.random() - Math.random())[0],
        buttonText: buttonText.sort(() => Math.random() - Math.random())[0],
      };
    });
};

export const ObtenerProductosPorCategoria = (categoria) => {
  return data.filter((p) => p.categoria === categoria);
};
