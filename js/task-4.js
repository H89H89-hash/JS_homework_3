"use strict";
const countTotalSalary = function (employees) {
  let sum = 0;
  for (const key in employees) {
    console.log(key + ":" + employees[key]);
    sum = sum + employees[key];
  }
  return sum;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
