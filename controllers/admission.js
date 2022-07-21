const admissionModel = require("../models/admission");

async function admission(req, res){

    try {
        // console.log(req,"1111111111122221");
        const {name, phoneno, qualification} = req.body;
        const resultfile = req.file;
        // resultfile.replace('\\', '_')
        console.log(resultfile, "bbbbbbbbbbbbbbbbb");

        await admissionModel(name, phoneno, qualification, resultfile);
        return res.json({ success: true, message: 'Succesfully submitted' }).status(200);
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'Error while submitting' }).status(500);
    }

    
}

module.exports = admission;