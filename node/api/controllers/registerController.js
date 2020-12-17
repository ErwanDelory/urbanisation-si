const db = require("../../mysqlConnect");
var sha256 = require("js-sha256");

function register(req, res) {
	let age = parseInt(req.body.age, 10);
	if (
		!req.body.genre ||
		!req.body.nom ||
		!req.body.prenom ||
		!req.body.email ||
		!(!isNaN(age) && age >= 0) ||
		!req.body.pays ||
		!req.body.job ||
		!req.body.password
	) {
		return res.status(403).json({
			message: "Error, argument is missing or incorrect",
		});
	}

	let query = `
    INSERT INTO users ( genre, nom, prenom, email, age, pays, job, password, type)
    VALUES ( "${req.body.genre}", "${req.body.nom}", "${req.body.prenom}", "${
		req.body.email
	}", "${req.body.age}", "${req.body.pays}", "${req.body.job}", "${sha256(
		req.body.password
	)}", "users")`;

	db.query(query, (err, result) => {
		if (err) {
			if (err.code === "ER_DUP_ENTRY") {
				return res.status(406).json({
					message: "Address mail already used",
				});
			} else {
				throw err;
			}
		}
		return res.status(200).json({
			message: "Register Ok.",
		});
	});
}
exports.register = register;
