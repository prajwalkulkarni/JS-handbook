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

let people:{
  name:string,
  age:number
}[] //Array of people

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


//Type aliases

//In type definition we saw defining type of array of persons to people, in the above case we could see that there was code redundancy and code-repititon. To avoid that
// we could use type aliases, meaning we are defining our own type. This can accomplished using the type keyword exclusive to TypeScript.

type Person = {
  name:string,
  age: number
}
//Here we are not assigning any object to Person, but instead we are defining the structure of Person because we've used the keyword type instead of let,var, const.
//So person variable can then be initialised like:
let person: Person
//And people like

let people: Person[]


//Generics
//Generics in TypeScript is similar to Generics in Java and vectors in C++. The main purpose of TypeScript is to have flxibility along with type safety. As the name suggests
//generics are used to build something generic(general) that can be adapted to various types depending on the input

function add<T>(val1:T,val2:T){
  return val1+val2
}

const res = add('a','b') //add('a','b') : string , although it was not specified that string should be returned from the function, TS logicalizes it and infers from the passed args.
console.log(res) //ab

const res = add(6,69)
console.log(res) //75
