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

//Promise.all executes then block if passed array of promises all resolve

/*Promise.allSettled is the method which helps to achieve the functionality which completes after all promises settle no matter of failures
It receives array of promises as an argument to it
Array of results will be the output after completion of all promises with status as 'fulfilled' or 'rejected'*/


const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map(async => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then(output => {
        for (let data of output) {
            if (data.status === 'fulfilled') console.log(data.status + ': ' + data.value);
            else if (data.status === 'rejected') console.log(data.status + ': ' + data.reason);
        }
    })
    .catch(err => {
        console.log(err);
    });

//Callback functions from promises are executed in microtask queue.




//Promise.all --> Resolves after all the promises in the iterable resolves, the result is rejected as soon as any of the promise in the iterable is rejected.

//Promise.allSettled --> Resolves after all promises fulfills or rejects.

//Promise.any --> Resolves as soon as any of the promise in the iterable resolves, rejects with AggregateError if all the promises in the iterable fails.

//Promise.race --> Resolves or rejects as soon as any of the promise in the iterable resolves or rejects.
