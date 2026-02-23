const number = "23";
if (typeof number === "number") {
  console.log("it is a number");
} else {
  console.log("it is not a number");
}

// another example
const number2 = 23;

if (typeof number2 === "number") {
  console.log("it is a number");
} else {
  console.log("it is not a number");
}


const student = {name: 'salman', job: 'unemployed'};
console.log(typeof (student));

const numbers = [1,2,3,4,5,6,7,8];
console.log(typeof numbers);
console.log(Array.isArray (numbers));
console.log(Array.isArray(student));
console.log(Array.isArray(number));
