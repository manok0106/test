
const index = require('./service');

let registration  = async(req,res) =>{

    try{
    let result = await index.saveData(req.body);
    if(result){
        res.send("register is success");
    }
    else{
        res.send("register is failed");
    }
}catch(err){
return false 
  }
}
  
  let login  = async(req,res) =>{
  let getUsers=await index.getUserDetails({email:req.body.email,passeword:req.body.passeword})

     if(getUsers.length>0){
         if(req.body.passeword==getUsers[0].passeword){
             res.send("login success")
         }
         else{
             res.send("login fail")
         }
        }
        else{
            res.send("no user found")
         }
    
          res.send(getUsers)
        }
  
  
    let getUsers = async(req,res) => {
  
      fs.readFile('register.txt',function(err,data){
         if(err){
         console.log("erroe")
        }
         else{
          res.send(JSON.parse(data))
         }
        });
      
      
  
  
    }
  
  
  module.exports={
      registration,
      login,
      getUsers
    
  }


  