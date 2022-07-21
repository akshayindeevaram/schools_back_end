const express = require("express");
const about = require("../controllers/about");
const admission = require("../controllers/admission");
const verifyToken = require("../middleware/auth");
const path= require('path')
const fs = require('fs');
const Router = express.Router()
// const importController = require('../controllers/admission');

const multer  = require('multer');
const BASE_DIR = path.join(process.cwd());
const UPLOADS_DIR = path.join(BASE_DIR, 'uploads/images/admission');

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    if(!fs.existsSync(UPLOADS_DIR)){
        fs.mkdirSync(UPLOADS_DIR);
    }
    cb(null, UPLOADS_DIR);
  },
  filename:(req, file, cb)=>{
    // console.log(file,"kkkkkkkkkkkkkkkk");
    const value=Date.now() + path.extname(file.originalname);
    // console.log(value,"ggggggggggggggg");
    cb(null, value)
    
    // cb(null, file.fieldname);
  }
})
const upload = multer({storage : storage }).single('resultfile');
// console.log(upload,"ccccccccc");


Router.get('/about', verifyToken, about);
Router.post('/admission',verifyToken,upload, admission);

// Router.post('/file_upload', upload, admission);


module.exports = Router;