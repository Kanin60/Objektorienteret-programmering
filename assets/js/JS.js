





class testObject{
    constructor(msg){

        this.message = msg
        console.log(this.message);
    }



}
const myObject = new testObject('Opbject 1')
const myObject2 = new testObject('Opbject 2')


myObject.message = "Ny besked";
myObject2.message = "juletræ";

console.log(myObject.message);
console.log(myObject2.message);