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
			dislike: { type: Number, default: 0 },
        },
    });
*/

//Like Dislike
async function likePlaylist(req, res, next) {}
async function dislikePlaylist(req, res, next) {}

//Video
async function addVideoPlaylist(req, res, next) {
	let playlist;
	const playlistId = req.params.pid;
	const url = req.body.url;
	try {
		playlist = await Playlist.findById(playlistId);
		playlist.urls.push(url);
		playlist = await playlist.save();
	} catch (err) {
		return res.status(404).json({
			message: "Could not find this playlist",
		});
	}
	res.json({ playlist: playlist.toObject({ getters: true }) });
}

async function rmVideoPlaylist(req, res, next) {
	let playlist;
	const playlistId = req.params.pid;
	const url = req.body.url;
	try {
		playlist = await Playlist.findById(playlistId);
	} catch (err) {
		return res.status(404).json({
			message: "Playlist not fount",
		});
	}

	index = playlist.urls.indexOf(url);
	if (index === -1) {
		return res.status(404).json({
			message: "Url not fount",
		});
	}
	playlist.urls.splice(index, 1);
	try {
		playlist = await playlist.save();
	} catch (err) {
		return res.status(406).json({
			message: "Err could not save",
		});
	}
	res.json({ playlist: playlist.toObject({ getters: true }) });
}

// Playlist
async function updatePlaylist(req, res, next) {}

async function deletePlaylist(req, res, next) {
	const playlistId = req.params.pid;
	let playlist;
	try {
		playlist = await Playlist.findOneAndRemove({ _id: playlistId });
		res.json({ playlist: playlist.toObject({ getters: true }) });
	} catch (err) {
		return res.status(404).json({
			message: "Playlist not found",
		});
	}
}

async function getPlaylistById(req, res, next) {
	let playlist;
	const playlistId = req.params.pid;
	try {
		playlist = await Playlist.findById(playlistId);
		res.json({ playlist: playlist.toObject({ getters: true }) });
	} catch (err) {
		return res.status(404).json({
			message: "Playlist not found",
		});
	}
}

async function getPlaylistByCreator(req, res, next) {
	const userId = req.params.uid;
	let playlist;
	try {
		playlist = await Playlist.find({ "info.creator": userId });
	} catch (err) {
		return res.status(406).json({
			message: "Something went wrong",
		});
	}
	if (playlist.length === 0) {
		return res.status(404).json({
			message: "User not found",
		});
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
	try {
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

		await createdPlaylist.save();
		res.status(201).json({ playlist: createdPlaylist });
	} catch (err) {
		return res.status(403).json({
			message: "Created Playlist Failed",
		});
	}
}

exports.dislikePlaylist = dislikePlaylist;
exports.likePlaylist = likePlaylist;

exports.addVideoPlaylist = addVideoPlaylist;
exports.rmVideoPlaylist = rmVideoPlaylist;

exports.updatePlaylist = updatePlaylist;
exports.deletePlaylist = deletePlaylist;
exports.getPlaylistById = getPlaylistById;
exports.getPlaylistByCreator = getPlaylistByCreator;
exports.createPlaylist = createPlaylist;
