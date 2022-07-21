const { registerModel,loginModel } = require("../models/register");
const jwt = require("jsonwebtoken");

async function register(req, res) {
try{
  console.log(req.body, "aaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(registerModel);
   
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  // const email = req.body.email;
  // const password = req.body.password;
  // const confirmpassword = req.body.confirmpassword;

  const {firstName, lastName, email, password, confirmpassword} = req.body;
  

  await registerModel(firstName, lastName, email, password, confirmpassword);

  return res.json({ success: true, message: 'Succesfully registered' }).status(200);
  }catch(err){
  return res.json({ success: false, message: 'Error while registering.' }).status(500); 
  }
}


async function login (req, res) {

  const {email, password} = req.body;
  try{
  const user = await loginModel(email, password);
if(user){
  const tokens = await jwt.sign({email:user.email},'secretkey',{expiresIn:'24h'})
  return res.status(200).json({ success: true, token: tokens})
}else{
  return res.status(401).json({ success: false, message: "Invalid credentials"})
}
}catch(e){
  console.log(e);
}
}


module.exports = {
  register,
  login,
};
