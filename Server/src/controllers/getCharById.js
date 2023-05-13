const axios = require("axios");


function getCharById(req, res) {
  const { id } = req.params;
  try {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data) {
          const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            gender: data.gender,
          };
          res.status(200).json(character);
        } else {
          res.status(404).json({ mesagge: "Not fount" });
        }
      });
  } catch (error) {
    res.status(500).json({ mesagge: error });
  }
}
module.exports = { getCharById };
