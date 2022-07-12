// const { Router } = require("express")

// app.post("/registration"),
// app.listen(4000)

// // app.get("http://localhost:3002/registrationform", (req,res) => {
// //     console.log("linked");
// //     res.send("linked")
// // })

// module.exports = Router


const express = require("express");
const { register, login, verifyToken } = require("../controllers/register");
const Router = express.Router()
Router.route("/register").post(register)
Router.route("/login", verifyToken).post(login)


module.exports = Router;





