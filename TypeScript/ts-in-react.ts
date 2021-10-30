//Using TypeScript in React is a little more advanced, especially when dealing with props and hooks.
//Generics is a major concept to be dealt with.


//TS with hooks
//When defining a hook, e.g useState, generics should be used to define what type of value does the state hold.

const [string, setString] = useState<string>() //defaults to useState<null>() 

//If it is an array of strings

const [str,setStr] = useState<string[]>([])


//Array of objects

type ObjectType = {
  name:string,
  age:number
}

const [state,setState] = useState<ObjectType>({name:'',age:10})

