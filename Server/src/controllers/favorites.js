let myFavorites = [];

function postFav(req, res) {
  const { id, name, status, species, gender, origin, image } = req.body;
  try {
    if (!id || !name || !status || !species || !gender || !origin || !image) {
      return res.status(404).json({ mesagee: "character not Found" });
    }
    const character = { id, name, status, species, gender, origin, image };
    myFavorites.push(character);
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(404).json({ mesagee: error });
  }
}

function deleteFav(req, res) {
  const { id } = req.params;

  try {
    if (!id) {
    return res.status(404).json({ mesagee: "Id not Found" });
  }
  const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
  myFavorites= newFavorites;
  res.status(200).json(myFavorites); 
  } catch (error) {
    res.status(404).json({ mesagee: error });    
  }
 
}

module.exports = { postFav, deleteFav };
