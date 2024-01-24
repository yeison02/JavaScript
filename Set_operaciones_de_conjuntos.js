//Con datos primitivos

//Union de conjuntos

const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([4, 5, 6, 7, 8]);

const set = new Set([...firstSet, ...secondSet]);
set; // Set({ 1, 2, 3, 4, 5, 6, 7, 8 })

//Interseccion de conjuntos

const first = new Set([1, 2, 3, 4, 5]);
const second = new Set([4, 5, 6, 7, 8]);
const commonElements = [...first].filter((element) => second.has(element));
const newSet = new Set(commonElements);
newSet; // Set({ 4, 5 })

//Diferencia de conjuntos

const primerSet = new Set([1, 2, 3, 4, 5]);
const segundoSet = new Set([4, 5, 6, 7, 8]);

const diferenciaElemento = [...primerSet].filter(
  (element) => !segundoSet.has(element)
);
const nuevoSet = new Set(diferenciaElemento);
nuevoSet; // Set({ 1, 2, 3 })

//Exclusion de conjuntos

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

const firstOnlyElements = [...set1].filter((element) => !set2.has(element));
const secondOnlyElements = [...set2].filter((element) => !set1.has(element));

const set3 = [...firstOnlyElements, ...secondOnlyElements];
set3; // Set({ 1, 2, 3, 6, 7, 8 })

//Con datos complejos

const elements = [
  { name: "Javascript" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "SVG" },
  { name: "JSON" },
  { name: "Javascript", type: "Node" },
  { name: "PHP" },
  { name: "Go" },
  { name: "Javascript", type: "Deno" },
];

const sett1 = new Set(elements.slice(0, 5)); // Los primeros 5 elementos
const sett2 = new Set(elements.slice(4)); // Los últimos 5 elementos

const commoElements = [...sett1].filter((element) => sett2.has(element));
const set4 = new Set(commoElements);

console.log(set4.size); // 1
