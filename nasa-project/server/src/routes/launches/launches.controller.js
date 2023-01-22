const lanchesModel = require("../../models/launches.model");

const httpGetAllLaunches = async (req, res) => {
  return res.status(200).json(lanchesModel.getAllLaunches());
};

const httpAddNewLaunch = async (req, res) => {
  const launch = req.body;
  const invvalidLaunch =
    !launch.mission || !launch.rocket || !launch.launchDate || !launch.target;
  if (invvalidLaunch)
    return res.status(400).json({ error: "missing required launch proprety" });

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate))
    return res.status(400).json({ error: "Invalid launch date" });
  lanchesModel.addNewLaunch(launch);
  return res.status(201).json(launch);
};

const httpAbortLaunch = async (req, res) => {
  const id = Number(req.params.id);
  if (!lanchesModel.existsLaunchWithId(id)) {
    return res.status(404).json({ error: "launch not found" });
  }
  const aborted = lanchesModel.abortLaunchById(id);
  return res.status(200).json(aborted);
};
module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
