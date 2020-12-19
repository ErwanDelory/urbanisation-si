const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes/routes");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use((req, res, next) => {
	// CORS POLICY
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, DELETE, PUT"
	);

	next();
});

app.use("/api", routes);

mongoose
	.connect("mongodb://mongodb:27017/dbyoutube", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		app.listen(5001, function () {
			console.log("Serveur up on 5001");
		});
	})
	.catch((err) => {
		console.log(err);
	});
