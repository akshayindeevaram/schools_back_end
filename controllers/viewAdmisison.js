const viewAdmissionModel = require('../models/viewAdmission');

async function viewadmission(req, res) {
	try {
		const viewAdmissionSection = await viewAdmissionModel();
		// console.log(viewAdmissionSection);
		if (!viewAdmissionSection) {
			return res
				.status(200)
				.json({ success: false, message: 'not found' });
		}
		return res
			.status(200)
			.json({ success: true, message: viewAdmissionSection });
	} catch (error) {
		console.log(error);
		return res.json({ success: false, message: 'Error' }).status(500);
	}
}

module.exports = viewadmission;
