
//1. array.for..of
const a = [1,2,3]

for(const obj of a){
  console.log(obj)
}
//1,2,3

//2. array.forEach
const a  = [1,2,3]

a.forEach((value,index)=>{
  console.log(value,index)
})
//1,0 2,1 3,2

//3. array.map
const a = [1,2,3]

a.map(res=>{
  return res+1
})
//[2,3,4] return a new array

//4. Array.from

const a = [1,2,3]
Array.from(a,arg=>arg*2)
//[2,4,6]

//5. array.reduce
// Used to make computations on array to return a single value in the end.

const a = [1,2,3]

let initValue = 5
const callback = (preceedValue,currentValue) =>{
  return preceedValue+currentValue
}
a.reduce(callback,initValue)
//5+1+2+3 = 11
//if initValue is not supplied, 0th index value is considered as the initial value
