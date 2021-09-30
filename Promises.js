/* A promise is an object that is sure to return a resolved or failed state. Promises could be used at places where there is uncertaininity of getting the expected results, at such instances
it is important to handle errors or failures if occured, this could to accomplished using promises*/

//Example snippet

function foo(num){
  return new Promise(function(resolve,reject){
    if(num%2==0){
      resolve("Even number")
    }
    else{
      reject("Odd number")
    }
  })
}

foo(3).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

//Outputs err callback result :- "Odd number"

//In promise chaining subsequent then blocks are executed only if the previous then block returns a resolved promise object.
//If in any then blocks, if anything(including but not limited to, calling rejection function , 
//throwing error) or anything that'd cause an erranous state is handled by the catch block.
  

//If async/await is used, since there's no chained catch block, one should wrap the async/await calls within a trivial try/catch block
//so that the error states are mananged in the catch block.

//IMPORTANT: if an error is THROWN, it is handled by catch block, if an error is RETURNED the subsequent then block is executed
