const viewAdmissionModel = require("../models/viewAdmission");

async function viewadmission(req, res){
try {
    const viewAdmissionSection = await viewAdmissionModel();
    console.log(viewAdmissionSection);
    return res.status(200).json({ success: true, message: viewAdmissionSection });     
} catch (error) {
    console.log(err);
    return res.json({ success: false, message: 'Error' }).status(500); 
}
    
}

module.exports = viewadmission;