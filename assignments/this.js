/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/Global Object Binding- when looking at the value on a global scope  
* 2. Implicit Binding- the object before the function is "this"
* 3. New binding  -a specific instance  that an obj that is created and 
returned by the constructor function (object creator=constructor function)
* 4. Explicit binding - call and apply methods are used. You can 
override the constructor objects are set up by calling the new 
context .call and .apply  

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Heather");

// Principle 2

// code example for Implicit Binding

const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Heather' };
  const you = { name: 'Alison' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  me.sayName();
  you.sayName();

// Principle 3

// code example for New Binding

// function CordialPerson(greeter1) {
    this.greeting = 'Hello' + " ";
    this.greeter1 = greeter1;
    this.speak = function() {
      console.log(this.greeting + this.greeter1);
      console.log(this);
    };
}
  const Alison = new CordialPerson('Heather');
  const Heather = new CordialPerson('Alison');
  
  Heather.speak();
  Alison.speak();

// Principle 4

// code example for Explicit Binding
function CordialPerson(greeter1) {
    this.greeting = 'Hello' + " ";
    this.greeter1 = greeter1;
    this.speak = function() {
      console.log(this.greeting + this.greeter1);
      console.log(this);
    };
}
  const Alison = new CordialPerson('Heather');
  const Heather = new CordialPerson('Alison');
  
Heather.speak.call(Alison); Alison.speak.apply(Heather);