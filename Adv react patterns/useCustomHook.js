//Custom hooks are functions that follow the rule of hook,
//Custom hooks alike regular hooks can be used either in other hooks or used in functional based component.
//Like regular functions it can take arguments and return results (It is recommended to return results either in the form of an array or object to mimic the actual hook behavior


export default function useCustomHook(arg){
  
  console.log(arg)
  
  return {
    name:arg,
    length: arg.toString().length
  }
}
