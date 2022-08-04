const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
	try {
		console.log('verifyToken');
		const bearerHeader = req.headers['authorization'];
		// console.log(bearerHeader,"aaaaaaaaaaaaaaaaaaaaaa");
		if (typeof bearerHeader !== 'undefined') {
			const bearer = bearerHeader.split(' ');
			const bearerToken = bearer[1];
			// console.log(bearerToken,"bbbbbbbbbbbbbbb");
			const user = jwt.verify(bearerToken, 'secretkey');
			req.user = { email: user.email };
			next();
		} else {
			return res
				.json({ success: false, message: 'verification failed.' })
				.status(401);
		}
	} catch (err) {
		return res
			.json({ success: false, message: 'Failed to verify.' })
			.status(500);
	}
}

module.exports = verifyToken;
