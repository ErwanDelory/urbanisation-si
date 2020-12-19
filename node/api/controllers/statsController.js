const db = require("../../mysqlConnect");

function getCountry(req, res, next) {
	let q = "SELECT pays, COUNT(pays) FROM users GROUP BY pays";
	db.query(q, (err, result) => {
		if (err) {
			return next(new Error("Error, query", 404));
		}
		console.log(result);
		return res.status(200).json({
			message: "Ok",
			data: result,
		});
	});
}

function getAge(req, res, next) {
	let q = `SELECT SUM(CASE WHEN age < 18 THEN 1 ELSE 0 END) AS "-18",
        SUM(CASE WHEN age BETWEEN 18 AND 24 THEN 1 ELSE 0 END) AS "18-24",
        SUM(CASE WHEN age BETWEEN 25 AND 34 THEN 1 ELSE 0 END) AS "25-34",
        SUM(CASE WHEN age BETWEEN 35 AND 44 THEN 1 ELSE 0 END) AS "35-44",
        SUM(CASE WHEN age BETWEEN 45 AND 54 THEN 1 ELSE 0 END) AS "45-54",
        SUM(CASE WHEN age BETWEEN 55 AND 64 THEN 1 ELSE 0 END) AS "55-64",
        SUM(CASE WHEN age BETWEEN 65 AND 74 THEN 1 ELSE 0 END) AS "65-74",
        SUM(CASE WHEN age > 75 THEN 1 ELSE 0 END) AS "75+"
        FROM users`;
	db.query(q, (err, result) => {
		if (err) {
			return next(new Error("Error, query", 404));
		}
		return res.status(200).json({
			message: "Ok",
			data: result,
		});
	});
}

function getSex(req, res, next) {
	let q = "SELECT genre, COUNT(genre) FROM users GROUP BY genre";
	db.query(q, (err, result) => {
		if (err) {
			return next(new Error("Error, query", 404));
		}
		console.log(result);
		return res.status(200).json({
			message: "Ok",
			data: result,
		});
	});
}

function getJob(req, res, next) {
	let q = "SELECT job, COUNT(job) FROM users GROUP BY job";
	db.query(q, (err, result) => {
		if (err) {
			return next(new Error("Error, query", 404));
		}
		console.log(result);
		return res.status(200).json({
			message: "Ok",
			data: result,
		});
	});
}

exports.getCountry = getCountry;
exports.getAge = getAge;
exports.getSex = getSex;
exports.getJob = getJob;
