// 1. variable
const fatherName = "sohel"; //no change
let season = "rainy"; // it can change
season = "summer";

//2.condition
// 6 basic condition you need to know : >,<, ===,!==,<=,>=
//multiple condition: &&(and), || (or)

if (fatherName === "Sohel" || season === "rainy") {
} else if (fatherName === "sohel") {
} else {
}

//3. array declare
// index,
//length,push,
const numbers = [12, 45, 56, 67, 19];

numbers[0] = 13;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(15, 35); // call the function and set params

// 6.Object
// 3 ways to access to property by name
const student = {
  name: "sohel",
  age: 23,
  hobby: ["football", "pc", "travel"],
};

const myAge = "age";

console.log(student.age); // access by property
console.log(student["age"]); // access by property name string
console.log(student[myAge]); // access by property name vai variable
