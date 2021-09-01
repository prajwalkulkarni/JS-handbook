
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
//[2,4,6] reutrn a new array

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


//6. array.concat(arrays)
const a = [1,2,3]
const b = [1,2,3]


a.concat(b) //can pass an array of array's to concatenate.
//1,2,3,1,2,3 => new array

//7. Spread operator
const a = [1,2,3]
const b = [1,2,3]

[...a,...b]
//1,2,3,1,2,3 =>new array

//8. array.slice()
//array.slice(fromIndex,toIndex) -> default startIndex = 0, default toIndex = array.length
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const heroes = names.slice(0, 2);
const villains = names.slice(2);

heroes; // => ['Batman', 'Catwoman']
villains; // => ['Joker', 'Bane']

//9. array.includes()

const a = [1,2,3]

a.includes(69) //false
a.includes(2)//true

//10. array.sort() --> sort array, empty values goes to the end
