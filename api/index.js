const serverless = require("serverless-http");
const createApp = require("../server/app");
const app = createApp();

module.exports = app;
module.exports.handler = serverless(app);
