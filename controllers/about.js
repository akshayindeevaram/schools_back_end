const {aboutModel} = require("../models/about");
const jwt = require("jsonwebtoken");

async function about(req, res){

  // console.log(req.body, req.query)
// res.send("hai world");
  // jwt.verify(req.token, 'secretkey', (err, authData)=>{
  //   if(err){
  //     // res.sendStatus(403);
  //     res.status(403);
  //   }else{
  //     res.json({
  //       message:"verified about",
  //       authData
  //     });
  //   }
  // }
  // )
  

try{

    const aboutSection = await aboutModel();
    return res.status(200).json({ success: true, message: aboutSection });     
}
catch(err){
    console.log(err);
    return res.json({ success: false, message: 'Error' }).status(500); 
}
}


module.exports = about;