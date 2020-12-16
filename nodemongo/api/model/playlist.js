const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	creator: { type: String, required: true },
	urls: { type: Array },
	like: { type: Number, default: 0 },
	follow: { type: Number, default: 0 },
});

module.exports = mongoose.model("Playlist", playlistSchema);
