//1. function invocation
//2. method invocation
//3. Constructor invocation
//4. Indirect invocation (Call, apply)
//5. Bound invocation
//6. Arrow function invocation


//1. Function Invocation, in DOM control flow, "this" in a function invocation refers to execution environment ( window in a browser)

function fn(){
  console.log(this==window) //true
}

//Context of "this" can be altered based on the object that's calling the function, method invocation(Read below).


//2. Method invocation. Function invoked on an objext is method invocation. "this" in method invocation refers to the object that the function is invoked on.

obj = {
  property: function(){
    console.log(this==obj) //true
  }
}

obj.property() // method invocation

//3. Constructor invocation
// Constructor is invoked with 'new' keyword, "this" refers to the created object
// a = B() -> "this" in class/function B refers to execution environment.
// a = new B() ->"this" in class/function B refers to object 'a'.

class B{
  constructor(){
    console.log(this == window)
  }
}

obj1 = new B() //false
obj2 = B()     //Uncaught error, cannot be invoked without new keyword.

function B(){
  console.log(this==window)
}

obj1 = new B() //false
obj1 = B() //true

