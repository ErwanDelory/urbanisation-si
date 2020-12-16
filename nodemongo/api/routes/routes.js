const express = require("express");
const playlistControllers = require("../controllers/playlistControllers");

const router = express.Router();

router.get("/playlist/user/:pid", playlistControllers.getPlaylistById);
router.get("/playlist/creator/:uid", playlistControllers.getPlaylistById);
router.post("/playlist/new", playlistControllers.createPlaylist);

module.exports = router;
