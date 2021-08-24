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



//4. Indirect invocation

/* I indirect invocation using methods such as call, bind and apply, we're either changing "this" reference or hooking the "this" to the wrapper function's context.
*/

obj = {
  prop:10,
  
  fn:function(){
    console.log(this==obj) //true
    
    function innerfunction(){
      console.log(this==window)//true, if no modifiers are applied, i.e no indirect invocation is made.
    }
    return innerfunction.call(this) // changeing "this" context in innerfunction from window to this's context in the function fn, i.e obj.
  }
}

obj.fn()
//OR
x = obj.fn.apply(x)
x()


//5. Bind functioon invocation
/*Bound functions context is strict and cannot be manipulated even with the use of indirect invocation.
i.e, using call or apply.*/
function fn(){
  console.log(this==window)
}

x = fn
x() //true

x = fn.bind(x)
x() // changing "this"'s reference from window to the object 'x'.

//6. Arrow function
/* Arrow function inherits "this" context from the defined parent function, if no parent function present, "this" refers to execution environment.*/

function someFunction(){
  cinsole.log(this==window)
  fn = ()=>{
    console.log(this==window)
  }
  return fn()
}

obj = someFunction() //true, true
obj = new someFunction() //false , false
    
