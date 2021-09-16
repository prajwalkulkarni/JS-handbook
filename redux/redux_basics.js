/*Redux is an alternate to context API provided by react, and is a state container that could be used with any JS framework or vanilla JS.
Redux could be used over context API when:
1) Frequent state updates ( Performance based )
2) To avoid more cluttering as redux doesn't need a provider wrapper.

INSTALLATION:
npm install redux react-redux 
^^ both are different packages.

USAGE:
The basic structure of redux resembles to that of context API, i.e needs a reducer and subscriber to listen to state changes and action functions.
*/


//REDUX STORE
import {createStore} from 'redux'
const initState = {val:0}
const reducer = (state=val,action)=>{
  switch(action.type){
    case 'increment':
      return {val:state.val+1}
    case 'decrement':
      return {val:state.val-1}
    default:
      retunr {val:-1}
  }
}

const store = createStore(reducer) //The createStore function accepts a reducer function.

export default store //Dispatch action to be used in components.
/*
const subscriber = ()=>{
const value = store.getState()
console.log(value) //Logs the state object of the store
}

store.subscribe(subscriber)
store.dispatch() //need to pass object containing action 
*/


//COMPONENT
/* To access, mutate and display the store values, we need to dipatch and select attributes from the store
This is accomplished using useDispatch and useSelector hook */
import {useDispatch,useSelector} from 'redux'
export default function Component(){
  const dispatch = useDispatch()
  const {val:value} = useSelector(state=>state)
  
  //use the aliased value constant to display value, and dispatch to dispatch appropriate actions
  
  const incrementHandler = () =>{
    dispatch({type:"increment"})
    
  }
  
  const decrementHandler = () =>{
    dispatch({type:"decrement"})
    
  }
  
  return(
    <>
    <h1>{value}</h1>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementHandler}>Decrement</button>
    </>
)
}

/*
Since the above pattern follows context API, redux toolkit could be used to leverage the use of redux.
Redux toolkit is a library provided by redux team to enhance the use of redux. 
*/

//Redux toolkit installation
// npm install @reduxjs/toolkit
