const planets = require("../../models/planets.model");

const getAllPlanets = async (req, res) => {
  return res.status(200).json(planets);
};

module.exports = { getAllPlanets };
