const viewUserAdmissionModel = require("../models/viewUserAdmission");

async function viewuseradmission(req, res){
try {
    const viewUserAdmissionSection = await viewUserAdmissionModel();
    console.log(viewUserAdmissionSection,"viewUserAdmissionSection");
    return res.status(200).json({ success: true, message: viewUserAdmissionSection });     
} catch (error) {
    console.log(err);
    return res.json({ success: false, message: 'Error' }).status(500); 
}
    
}

module.exports = viewuseradmission;