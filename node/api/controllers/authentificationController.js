const db = require("../../mysqlConnect");
var sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");
const configjwt = require("../config.json");
const config = require("../../config");

async function auth(req, res, next) {
	if (!req.body.email || !req.body.password) {
		return res.status(403).json({
			message: "Invalid Email/Password",
		});
	}

	let query = `SELECT * FROM users
  WHERE email = "${req.body.email}" 
  AND password = "${sha256(req.body.password)}"`;

	db.query(query, (err, result) => {
		if (err) throw err;

		if (result.length > 0) {
			const token = jwt.sign(
				{
					id: result[0].id,
					username: result[0].email,
				},
				configjwt.secret,
				{ expiresIn: "3 hours" }
			);
			return res.status(200).json({
				message: "Auth Ok.",
				token: token,
				nom: result[0].nom,
				prenom: result[0].prenom,
				id: result[0].id,
				role: result[0].type,
			});
		} else {
			return res.status(403).json({
				message: "Auth Fail.",
			});
		}
	});
}

exports.auth = auth;
