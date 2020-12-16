const mongoose = require("mongoose");
const Playlist = require("../model/playlist");
/*
    const playlistSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        urls: { type: Array },
        info: {
            creator: { type: String, required: true },
            like: { type: Number, default: 0 },
        },
    });
*/

async function getPlaylistById(req, res, next) {
	res.json({ data: "salut mec" });
}

async function createPlaylist(req, res, next) {
	const { name, description, creator } = req.body;

	const createdPlaylist = new Playlist({
		name,
		description,
		creator,
		info: {
			urls: null,
			like: 0,
		},
	});
	console.log("fzedfesfesf");
	try {
		await createdPlaylist.save();
	} catch (err) {
		console.log("Created Playlist Fail  " + err);
		return next(err);
	}
	res.status(201).json({ playlist: createdPlaylist });
}

exports.getPlaylistById = getPlaylistById;
exports.createPlaylist = createPlaylist;
