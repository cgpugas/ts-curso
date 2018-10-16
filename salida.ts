
/// <reference  path="circulo.ts"/>
console.log("hello word")
let maria: number| string=23;
let pp:number=24;
if (typeof pp =="number"){
console.log("qqq");
}
class Persona{
    private _age:number;

    
    constructor (value: number)
    {
        this._age=24;
    }

    set age ( value:number){
        this._age=value;
    }
}
let p=new Persona(54777310);
p.age=556;
console.log(p);

class Car{
    name:string;
    acceleration :number =0;

    constructor( name:string  ){
        this.name=name;

    }

    honk()
    {console.log("toooo");}

    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

class BaseObject{
    width:number= 0;
    length:number= 0;
}


class Rectangle extends BaseObject
{
   
   
         calcSize () {
        return this.width * this.length;
}
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

class Persona2{

   private _firstName:string="";

   get firstName() {
    return this._firstName;
}
set  firstName (value:string) {
    if (value.length > 3) {
        this._firstName = value;
    }
    else {
        this._firstName = "";
    }
}


}
const person=new Persona2();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
console.log(Mymath.calculaArea(25));




