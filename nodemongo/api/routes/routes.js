const express = require("express");
const playlistControllers = require("../controllers/playlistControllers");

const router = express.Router();

router.get("/playlist", playlistControllers.getPlaylistById);
router.post("/", playlistControllers.createPlaylist);

module.exports = router;
