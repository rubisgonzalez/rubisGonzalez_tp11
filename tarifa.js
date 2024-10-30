let pagoMes = 20000;
let consumoKWH = 450;
let aumento = pagoMes + pagoMes*20/100;

pagoMes = consumoKWH > 300 ? aumento : pagoMes;

console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes}.`);
