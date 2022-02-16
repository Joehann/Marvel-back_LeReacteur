const express = require("express");
const axios = require("axios");
const router = express.Router();

/*
Route : /comics | GET
*/
router.get("/comics", async (req, res) => {
  try {
    const comics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(comics.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
