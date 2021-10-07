"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let allPropValues = [];
  for (const product of arr) {
    const keysOfProduct = Object.keys(product);

    if (keysOfProduct.includes(prop)) {
      allPropValues.push(product[prop]);
    }
    // Альтернативный способ
    //
    // if (product[prop] !== undefined) {
    //   allPropValues.push(product[prop]);
    // }
  }
  return allPropValues;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
