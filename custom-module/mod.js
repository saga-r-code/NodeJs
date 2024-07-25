console.log("module file");

const average = (val) => {
  let sum = 0;
  val.forEach((element) => {
    sum += element;
  });

  return sum / val.length;
};

const factorial = (val) => {
  let fact = 1;
  for (let i = 1; i <= val; i++) {
    fact *= i;
  }

  return fact;
};

//Export The Module
// module.exports = avg
module.exports = {
  avg: average,
  user: "sagar",
  age: 25,
  fact: factorial
};
