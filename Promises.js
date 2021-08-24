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

  
