const { registerModel,loginModel } = require("../models/register");
// const  registerModel  = require("../models/register");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  console.log(req.body, "aaaaaaaaaaaaaaaaaaaaaaaa");
  //   const x = await registerModel();
  console.log(registerModel);
  res.json({
    message:"regignstered"
  });
   




  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  //
  const confirmpassword = req.body.confirmpassword;
  //
  await registerModel(firstName, lastName, email, password, confirmpassword);
}

async function login (req, res) {
  // console.log(req.token);
  // const {token} = req.body;
  // console.log(token,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  // jwt.verify(req.token, 'secretkey', (err, authData)=>{
  //   if(err){
  //     // res.sendStatus(403);
  //     res.status(403)
  //   }else{
  //     res.json({
  //       message:"login",
  //       authData
  //     });
  //   }
  // }
  // )


  const email = req.body.email;
  const password = req.body.password;
  try{
  const user = await loginModel(email, password);
console.log(user);

  const tokens = await jwt.sign({id:user.id,email:user.email},'secretkey',{expiresIn:'24h'})
  console.log(tokens);  
  if(user){
    return res.status(200).json({ success: true, token: tokens})
  }else{
    return res.status(200).json({ success: true, message: "Invalid credentials"})
  }
}catch(e){
  console.log(e);
}
}

function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(403);
  }
}
module.exports = {
  register,
  login,
  verifyToken
};
