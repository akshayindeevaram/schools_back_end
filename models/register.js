const makeDb = require("../controllers/db");
const bcrypt = require('bcryptjs');
// const { query } = require("express");

async function registerModel(firstName,lastName,email,password,confirmpassword) {
  console.log(firstName,lastName,email,password,":register details");
  const db = makeDb();

  //
  // db.query('SELECT email FROM registration WHERE email = ?',{email},async(err, results)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   if(results.length > 0){
  //     return results.render('registerModel',{
  //       message:'That email is already in use'
  //     })
  //   }else if (password !== confirmpassword){
  //     return results.render('register',{
  //       message: 'Passwords do not match'
  //     })
  //   }
  //   let hashedPassword = await bcrypt.hash(password, 8);
  //   console.log(hashedPassword);

  //   db.query('INSERT INTO registration SET ?', {firstName: firstName, lastName:lastName, email:email, password:hashedPassword }, (err, results)=>{
  //     if(err){
  //       console.log(error);
  //     }else{
  //       return results.render('registerModel',{
  //         message:'user registered'
  //       });
  //     }
  //   })
  // } )




  //

  try {
    // const createtable = await db.query("CREATE TABLE registration(id int primary key auto_increment, first_name varchar(20), last_name varchar(20), email varchar(20), password varchar(20))");
    const insertQuery = await db.query(`INSERT INTO registration (first_name,last_name,email,password) VALUES 
    ('${firstName}','${lastName}','${email}','${password}')`);
    console.log(insertQuery,"55555");
    // console.log("fffffffffffffffffffffffffff");
    
  } catch (err) {
  } finally {
    await db.close();
  }
  
}

async function loginModel(email,password){
  console.log(email,password,":login details");
     const db = makeDb();
  try{
    const checkUserQuery = `SELECT email, password FROM registration WHERE email='${email}' AND password='${password}'`;
    const selectQuery = await db.query(checkUserQuery);
    // const selectQuery = await db.query ();
    console.log(selectQuery,"66666");
  const user=selectQuery[0] 
  // console.log(user);
    return user
}
  
  catch (err){

    console.log(err);
  }finally{
    await db.close();
  }
}


module.exports = {
  registerModel,
  loginModel
};


