var counter = 0;

var fibonacci = function (n) {
  // Counter for seeing how many times the function is executed 
  counter++;
  // we receive a number if it is less than two we return the number,
  // else, to do two recursive callings to the function
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Loop where we go passing number one by one to the fibonacci function and showing the result
for (var i = 0; i <= 10; i += 1) {
  console.log(i + ': ' + fibonacci(i));
}

console.log(counter); //453
