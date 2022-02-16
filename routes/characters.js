const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

//Routes

/*
Route : /characters | GET
*/
router.get("/characters", async (req, res) => {
  try {
    // console.log("route: /characters");

    const characters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );

    res.json(characters.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
