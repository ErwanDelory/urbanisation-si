const express = require("express");
const playlistControllers = require("../controllers/playlistControllers");

const router = express.Router();

// *** Playlist Controllers *** \\\
// Video
router.patch("/playlist/add/:pid", playlistControllers.addVideoPlaylist);
router.patch("/playlist/remove/:pid", playlistControllers.rmVideoPlaylist);
//Playliste
router.delete("/playlist/delete/:pid", playlistControllers.deletePlaylist);
router.get("/playlist/find/:pid", playlistControllers.getPlaylistById);
router.get("/playlist/creator/:uid", playlistControllers.getPlaylistByCreator);
router.post("/playlist/new", playlistControllers.createPlaylist);

module.exports = router;
