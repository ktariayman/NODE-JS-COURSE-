const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
// this function createServer() to async await loadPlanetFunction()
async function createServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
}

createServer();
