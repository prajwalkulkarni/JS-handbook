//TypeScript is a superset of JavaScript, which enables static typing on JS. Since JS is a dynamically typed languages, it could be more prone to error
//when the codebase increases, hence TypeScript ensures that that the function/variables are defined correctly.

let name:string
name = 'ABC'
name = 2123 //Error, as name:string is supposed to be a string

let age:number
age = 69
age='69' //Error

let hobbies: string[]
hobbies = ['Travelling','Sleeping']


//If a variable needs to be assinged to an object with a known structure it could be done as follows.
let person:{
  name:string,
  age:number
}
//Note that we are not assigning this object to person, but we are defining its structure, meaning the variable person can hold an object that has a key named name and age
//that are string and number, any object with any other key or same key with different type is not allowed.

person = {
  name:'Mukesh',
  age:50
} //Valid

person = {
  name:'Mukesh',
  age:'21',
  height:'5.3'
} 
//^Not valid because age is of type string and an extra property of height is assigned.



//Type Inference
let age:number = 21
//Here we don't need to explicitly mention that age is of the type number, because of type inference of TS. Since 21 benig a number is assigned to age variable, TS 
//understands that only a number should be assigned to this.


//Type Union
//sometimes we'd want a variable to hold more than one type of value, e.g number and string. In such cases we could use union operator (|) on the variable to tell TS that
//this variable can hold the said types.

let tShirtSize : number | string 
tShirtSize = 'XL'
tShirtSize = 40

