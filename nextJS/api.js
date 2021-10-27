//Localised api route for nextJS apps, that can make api requests from the given path.
//Should create a directory named api within the pages dir.  The file name will be the api endpoint
//e.g if filename is addpost , api route will be api/addpost

export defualt function handler(req,res){
  
  if(req.method==="POST"){
    
    //do work here
    
    
    res.code(201).json("Posted successfully")
  }
}
