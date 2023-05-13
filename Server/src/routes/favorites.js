const express = require("express");
const router = express.Router();

const {postsFav, deleteFav} = require("../controllers/favorites")

router.post("/", postsFav)
router.delete("/:id", deleteFav)
module.exports = router;