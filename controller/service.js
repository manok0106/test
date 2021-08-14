const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = mongoose.Schema({
 "firstname":String,
 "lastname":String,
 "email":String,
 "passeword":String,
 "mobile":String,
 "dob":String

 });

 const model = mongoose.model('registration', registrationSchema)


 let saveData = async(data)=>{
    try {
        const user = new model(data);
        const savedata = await user.save();
        return savedata;
    } catch(err) {
        return false
    }

}


let getUserDetails = async(data)=>{
  let Users=await model.find(data)
  return Users
}


module.exports={
    saveData,
    getUserDetails
    
  
}