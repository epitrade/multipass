/* just need express */
const express                           = require("express");
const app                               = express();

/*
  use the .env file in the root for NON-PRODUCTION
  production env vars come from Dockerfile (and are configured on the machine itself)
*/
process.env.NODE_ENV !== "production" ? require("dotenv").config() : console.log("mode: production");





/* configures things like CORS/cookie parsing etc*/
require("./config/server.js")(app);

/* connects to mongo */
require("./config/db.js");







/* our routes... */
const accountRoutes                     = require("./routes/account/index.js");
//const oauthRoutes                       = require("./routes/oauth/index.js");

app.use("/account", accountRoutes);
//app.use("/oauth", oauthRoutes);


/* send it back to nuxt */
module.exports = {
  path: "/api",
  handler: app
}
