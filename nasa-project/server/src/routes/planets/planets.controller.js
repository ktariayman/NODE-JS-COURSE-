const planetsModel = require("../../models/planets.model");

const httpGetAllPlanets = async (req, res) => {
  return res.status(200).json(planetsModel.getAllPlanets());
};

module.exports = { httpGetAllPlanets };
