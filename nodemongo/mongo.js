const mongoose = require("mongoose");

const Playlist = require("./api/model/playlist");

mongoose
	.connect("mongodb://mongo:27017")
	.then(() => {
		console.log("Connected Mongodb");
	})
	.catch((err) => {
		console.log("Connection Failed mongo" + err);
	});
