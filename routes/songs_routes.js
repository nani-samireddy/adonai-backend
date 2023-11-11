const router = require("express").Router();
const { add } = require("nodemon/lib/rules");
// Require the controllers
const {
  getAllSongs,
  getUpdatedSongs,
  addSong,
  updateSong,
  deleteSong,
} = require("../controllers/song_controller");

router.get("/getallsongs/:language", getAllSongs);

router.get("/getUpdatedSongs/:language/:id", getUpdatedSongs);

router.post("/addsong", addSong);

router.put("/updatesong/:id", updateSong);

router.delete("/deletesong/:id", deleteSong);

module.exports = router;
