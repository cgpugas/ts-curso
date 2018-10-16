"use strict";
/// <reference  path="circulo.ts"/>
console.log("hello word");
let maria = 23;
let pp = 24;
if (typeof pp == "number") {
    console.log("qqq");
}
class Persona {
    constructor(value) {
        this._age = 24;
    }
    set age(value) {
        this._age = value;
    }
}
let p = new Persona(54777310);
p.age = 556;
console.log(p);
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() { console.log("toooo"); }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
class Persona2 {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new Persona2();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
console.log(Mymath.calculaArea(23));
