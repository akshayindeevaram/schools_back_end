const viewUserAdmissionModel = require('../models/viewUserAdmission');

// console.log(
//   viewUserAdmissionModel,
//   '--------------viewUserAdmissionModel--------------'
// );

async function viewuseradmission(req, res) {
	try {
		const { id } = req.query;
		// console.log(id, 'yyyyyyyyyyyyyyyyyyyyyyy');
		const viewUserAdmissionSection = await viewUserAdmissionModel(id);
		// console.log(viewUserAdmissionSection, 'viewUserAdmissionSection');
		if (!viewUserAdmissionSection) {
			return res
				.status(200)
				.json({ success: false, message: 'not found' });
		}

		return res
			.status(200)
			.json({ success: true, message: viewUserAdmissionSection });
	} catch (error) {
		console.log(error);
		return res.json({ success: false, message: 'Error' }).status(500);
	}
}

module.exports = viewuseradmission;
