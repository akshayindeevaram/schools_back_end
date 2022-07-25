const express = require("express");
const app = express();


const register = require("./routes/auth");
const about = require("./routes/content");
const admission = require("./routes/content");
const viewadmission = require("./routes/content")
const viewuseradmission = require("./routes/content")
const bodyParser = require("body-parser");
const morgan = require("morgan");




// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('combined'));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,x-client-key, x-client-token, x-client-secret, Authorization");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});


app.get("/", (req, res) => {
  console.log("Success");
  res.send("Success");
});
app.use("/api/v1", register);
app.use("/api/v1", about);
app.use("/api/v1", admission);

app.use("api/v1", viewadmission);
app.use("api/v1", viewuseradmission);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
