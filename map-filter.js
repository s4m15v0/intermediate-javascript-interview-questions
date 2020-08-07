const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x);

// console.log(result);

// map used in react , array er moddhe element niye kichu kore then result ja pabe seta arekta array te diye dekhabe  
// filter always retuns array , even an empty array | array diye dibe 
// find sudhu element dibe 

const bigger = numbers.filter(x => x<5);

const isThere = numbers.find(x => x > 5);
console.log(isThere);