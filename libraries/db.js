const util = require('util');
const mysql = require('mysql');
function makeDb() {
	const connection = mysql.createConnection({
		host: 'localhost',
		port: 3300,
		user: 'root',
		password: 'root',
		database: 'schools',
	});

	return {
		query(sql, args) {
			return util.promisify(connection.query).call(connection, sql, args);
		},
		close() {
			return util.promisify(connection.end).call(connection);
		},
	};
}

module.exports = makeDb;
