// Maximum call stack size exceeded
// Tail call optimization

const trampoline = fn => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

const executeSum = (number, sum = 0) => (
    number === 0
    ? sum
    : () => executeSum(number -1, sum + number)
);

try {
const sumWithTrampoline = trampoline(executeSum)
const finalValue = sumWithTrampoline(100000000);
console.log(finalValue); 
} catch(error) {
    console.log(`There was an error: ${error}`);
}
