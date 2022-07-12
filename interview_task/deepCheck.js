function deepCheck(val1,val2){
    
    if(typeof val1 !== typeof val2) return false;
    
    const primitives = ['number','undefined','string','boolean',null]
    if(primitives.includes(typeof val1)){
        return val1===val2
    }
    
    if(Array.isArray(val1)){
        if(val1.length !== val2.length) return false
        
        return val1.every((item,idx)=>deepCheck(item,val2[idx]))?true:false
    }
    
   return JSON.stringify(val1) === JSON.stringify(val2) 
}

console.log('123',123)
console.log(deepCheck({},[]))
