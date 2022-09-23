import {Creator, ConcreteProductA} from "./creational-patterns/factory";

const productA = Creator.createObject('a');
const productB = Creator.createObject('b');
const productC = Creator.createObject('c');

console.log(productA.getName());
console.log(productB.getName());
console.log(productC.getName());

const productA1 = productA as ConcreteProductA;
productA1.setPrice(200);
console.log(productA1.getPrice());
