const express = require("express");
const authentificationControllers = require("../controllers/authentificationController");
const registerController = require("../controllers/registerController");
const statsController = require("../controllers//statsController");

const router = express.Router();

//Authentification Controllers
router.post("/auth", authentificationControllers.auth);
router.post("/register", registerController.register);

//Stats controllers
router.get("/stats/pays", statsController.getCountry);
router.get("/stats/age", statsController.getAge);
router.get("/stats/sex", statsController.getSex);
router.get("/stats/job", statsController.getJob);

module.exports = router;
