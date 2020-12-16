const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	urls: { type: Array },
	info: {
		creator: { type: String, required: true },
		like: { type: Number, default: 0 },
		dislike: { type: Number, default: 0 },
	},
});

module.exports = mongoose.model("Playlist", playlistSchema);
