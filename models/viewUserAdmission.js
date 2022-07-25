const makeDb = require("../libraries/db");

async function viewUserAdmissionModel(){
    const db = makeDb();
    try{
        const checkViewUserAdmission = 'SELECT * FROM admission_form';
        // console.log(checkViewUserAdmission,"checkviewuseradmission");
        const selectViewUserAdmission = await db.query(checkViewUserAdmission);
    
        return selectViewUserAdmission;
    }
    catch(err){
        console.log(err);
        return false;
    }finally{
        await db.close();
    }


}

module.exports = viewUserAdmissionModel;