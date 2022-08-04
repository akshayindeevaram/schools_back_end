const { aboutModel } = require('../models/about');
const jwt = require('jsonwebtoken');

async function about(req, res) {
	try {
		const aboutSection = await aboutModel();
		// console.log(aboutSection,"77777777777777777777777");
		if (!aboutSection) {
			return res
				.status(200)
				.json({ success: false, message: 'not found' });
		}
		return res.status(200).json({ success: true, message: aboutSection });
	} catch (err) {
		console.log(err);
		return res.json({ success: false, message: 'Error' }).status(500);
	}
}

module.exports = about;
