const petsList = [
    { name: 'kini', age: 4, type: 'dog' },
    { name: 'Martin', age: 4, type: 'dog' },
    { name: 'Rush', age: 4, type: 'dog' },
    { name: 'Rufo', age: 4, type: 'cat' },
    { name: 'Guchi', age: 4, type: 'bird' },
    { name: 'Betty', age: 4, type: 'cat' },
];

const indexed = petsList.reduce((accumulator, element) => ({
    ...accumulator,
    [element.name]: { 
        ...element,
        id : Math.floor(Math.random() * 1000),
    },
}), {});

console.log(indexed);
