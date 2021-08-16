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

