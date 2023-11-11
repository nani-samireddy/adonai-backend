const Song = require("../models/song_model");

const getAllSongs = async (req, res) => {
  try {
    const { language } = req.params;
    const songs = await Song.find({ language });
    res.status(200).json({ songs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUpdatedSongs = async (req, res) => {
  try {
    const { language, id } = req.params;

    const updatedSongs = await Song.find({
      active: true,
      language,
      timestamp: { $gt: id },
    });

    res.status(200).json({ updatedSongs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addSong = async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json({ song });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await Song.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: "Song deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSongs,
  getUpdatedSongs,
  addSong,
  updateSong,
  deleteSong,
};
