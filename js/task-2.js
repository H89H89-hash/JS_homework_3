"use strict";
const countProps = function (obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(key);
  }
  return arr.length;
};
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
