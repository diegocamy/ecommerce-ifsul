export const calcularCuota = (precio) => {
  const precioCuota = (
    precio.substring(1).replace(",00", "").replace(".", "") / 6
  ).toFixed(2);
  return precioCuota;
};
