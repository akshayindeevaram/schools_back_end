const makeDb = require("../libraries/db");

async function admissionModel(name, phoneno, qualification, resultfile){
const db = makeDb();

try{
const insertQuery = await db.query(`INSERT INTO admission_form  (name, phone_number, qualification, result) VALUES
('${name}','${phoneno}','${qualification}','${resultfile.filename}')`);
console.log(insertQuery,"aaaooooooooooooooooaaaaaaaaaaaa");
return true;

} catch(err) {
console.log(err);
return false;
} finally {
    await db.close();
}

}

module.exports = admissionModel;