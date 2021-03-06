"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // Присваеваю totalPrice 0 чтобы, избежать возврата undefined
  let totalPrice = 0;
  for (const product of allProdcuts) {
    // const val = Object.values(product);
    const val = product.name;
    if (val === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
};
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
