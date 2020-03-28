const mapStructure = new Map();

mapStructure.set('2014', 'Brasil');
mapStructure.set('2010', 'Sudafrica');
mapStructure.set('2006', 'Alemania');
mapStructure.set('2002', 'Replubica de Korea / Japon');

console.log(mapStructure);
console.log(mapStructure.entries());
console.log(mapStructure.keys());
console.log(mapStructure.values());
console.log(mapStructure.has('2002'));
console.log(mapStructure.get('2002'));

console.log(mapStructure.delete('2002'));
console.log(mapStructure);
console.log(mapStructure.size);

mapStructure.forEach((value, key) => console.log(`${key}: ${value}`));
for (const key of mapStructure.keys()) { console.log(key); }

console.log(mapStructure.clear());
console.log(mapStructure);
