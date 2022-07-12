const express = require("express");
const app = express();
// const makeDb = require("./controllers/db");


// const jwt =require("jsonwebtoken")

// app.get('/api',(req,res) => {
//     res.json({
//         message:'welcome to api'
//     })
// })

const cors = require("cors");
app.use(cors());
app.use(express.json());
const register = require("./routes/auth");
app.get("/", (req, res) => {
  console.log("Success");
  res.send("Success");
});
app.use("/api/v1", register);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});