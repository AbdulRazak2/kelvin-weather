//kelvin declaration
const kelvin = 293;
//converting kelvin into celsius 
const celsius = kelvin - 273;
//fahrenheit calculation
let fahrenheit = celsius * (9 / 5) + 32;
//rounding the decimal value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature ${Newton} degrees Newton.`);
