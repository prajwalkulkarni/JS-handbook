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



//If it's being used with useRef, it should be specified what exactly is the ref pointing to...

const ref = useRef<HTMLInputElement>(null);

//Writing any functional component in tsx require the component to be typed as React.FC

const Component:React.FC = (props)=>{
  return(...)
         
}

//React.FC accepts generic parameters under a single object, that specifies all the prop items and their specified type
type ObjectType = {
  name:string,
  age:number
}
const Component: React.FC<{items:ObjectType[],handler:Function,handlerWithParams: (args)=>void}> = (props) =>{
  return(
    <h1>{props.items.map(item=>return(<p>{item.name}</p>))}</h1>
    )
}

const ParentComponent = ()=>{
  
  return(
    <div>
    <Component items={[{name:'Ram',age:18},{name:'Shyam',age:23}]} handler={()=>{console.log("This is a function")}} handlerWithParams = {(arg)=>console.log(`this is ${arg}`)}/>
    </div>
  )
}
