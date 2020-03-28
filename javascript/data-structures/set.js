const setStructure = new Set();

setStructure.add('2014');
setStructure.add(45.89);
setStructure.add(true);
setStructure.add(5000);

console.log(setStructure);
console.log(setStructure.entries());
console.log(setStructure.keys());
console.log(setStructure.values());
console.log(setStructure.has('2014'));

console.log(setStructure.delete('2014'));
console.log(setStructure);
console.log(setStructure.size);

setStructure.forEach((value) => console.log('Value: ', value));
for (const key of setStructure.keys()) { console.log('Key: ', key); }

console.log(setStructure.clear());
console.log(setStructure);

const intersection = (setA, setB) => {
    const result = [];
    setA.forEach(item => {
        if (setB.has(item)) {
            result.push(item);
        }
    })
    return result;
}
