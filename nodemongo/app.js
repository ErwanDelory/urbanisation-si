const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes/routes");

app.use(bodyParser.json());

app.use((req, res, next) => {
	// CORS POLICY
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

	next();
});

app.use("/api", routes);

app.listen(5001, function () {
	console.log("Serveur up on 5001");
});
