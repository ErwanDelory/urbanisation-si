const mongoose = require("mongoose");
const Playlist = require("../model/playlist");

async function getPlaylistById(req, res, next) {
	res.json({ place: place.toObject({ getters: true }) }); // => { place } => {place: place}
}

async function createPlaylist(req, res, next) {
	res.json({ place: place.toObject({ getters: true }) }); // => { place } => {place: place}
}

exports.getPlaylistById = getPlaylistById;
exports.createPlaylist = createPlaylist;
