const makeDb = require('../libraries/db');

async function viewAdmissionModel() {
	const db = makeDb();
	try {
		const checkViewAdmission = 'SELECT id,name FROM admission_form';
		// console.log(checkViewAdmission, 'checkviewadmission');
		const selectViewAdmission = await db.query(checkViewAdmission);

		return selectViewAdmission;
	} catch (err) {
		console.log(err);
		return false;
	} finally {
		await db.close();
	}
}

module.exports = viewAdmissionModel;
