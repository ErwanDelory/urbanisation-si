const mongoose = require("mongoose");
const Playlist = require("../model/playlist");
const playlist = require("../model/playlist");
/*
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
*/

async function addVideoPlaylist(req, res, next) {}

async function rmVideoPlaylist(req, res, next) {}

async function updatePlaylist(req, res, next) {}

async function deletePlaylist(req, res, next) {}

async function getPlaylistById(req, res, next) {
	let playlist;
	const playlistId = req.params.pid;
	try {
		playlist = await Playlist.findById(playlistId);
	} catch (err) {
		return next(
			new Error("Something went wrong, could not find this playlist", 404)
		);
	}
	if (!playlist) {
		return next(new Error("Error, Playlist not found", 404));
	}
	res.json({ playlist: playlist.toObject({ getters: true }) });
}

async function getPlaylistByCreator(req, res, next) {
	const userId = req.params.uid;
	let playlist;
	try {
		playlist = await Playlist.find({ creator: userId });
	} catch (err) {
		return next(new Error("Something went wrong, could not find", 404));
	}
	if (!playlist) {
		return next(new Error("Error, Playlist not found for userId", 404));
	}
	res.json({
		playlist: playlist.map((playlist) =>
			playlist.toObject({ getters: true })
		),
	});
}

async function createPlaylist(req, res, next) {
	const { name, description, urls, info } = req.body;
	const creator = info.creator;

	const createdPlaylist = new Playlist({
		name,
		description,
		urls,
		info: {
			creator,
			urls: null,
			like: 0,
			dislike: 0,
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

exports.addVideoPlaylist = addVideoPlaylist;
exports.rmVideoPlaylist = rmVideoPlaylist;
exports.updatePlaylist = updatePlaylist;
exports.deletePlaylist = deletePlaylist;
exports.getPlaylistById = getPlaylistById;
exports.getPlaylistByCreator = getPlaylistByCreator;
exports.createPlaylist = createPlaylist;
