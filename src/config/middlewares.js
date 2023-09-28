const bodyParser = require("body-parser");
const consign = require("consign");

module.exports = (app) => {
  app.use(bodyParser.json());
};
