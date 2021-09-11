import {useReducer } from "react"

const useInput = (validateValue)=>{

    // const [value,setValue] = useState('')
    const [valueAndTouched,dispatchEvent] = useReducer((state,action)=>{
        // console.log(action)
        if(action.type==="change"){
            
            return {
                ...state,
                value:action.target.value
            }
        }
        else if(action.type==="blur"){
            return {
                ...state,touched:true
            }
        }
        
    },{value:'',touched:false})
  

    const valid = validateValue(valueAndTouched.value)
    // const hasError = !valid && touched
    const hasError = !valid && valueAndTouched.touched

    return {
        value:valueAndTouched.value,
        valid,
        hasError,
        inputValueChangeHandler:dispatchEvent,
        inputOnBlurHandler:dispatchEvent
        
    }
}

export default useInput
