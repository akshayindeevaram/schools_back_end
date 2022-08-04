const makeDb = require('../libraries/db');

async function viewUserAdmissionModel(id) {
	const db = makeDb();
	try {
		// const checkViewUserAdmission = 'SELECT * FROM admission_form';
		const checkViewUserAdmission = `SELECT * FROM admission_form WHERE id = '${id}'`;
		// console.log(checkViewUserAdmission,"----------checkviewuseradmission-----------");
		const selectViewUserAdmission = await db.query(checkViewUserAdmission);
		// console.log(selectViewUserAdmission,"aaaaaaaaaaaaaaaaaaaaaaaaaa");

		return selectViewUserAdmission;
	} catch (err) {
		console.log(err);
		return false;
	} finally {
		await db.close();
	}
}

module.exports = viewUserAdmissionModel;
