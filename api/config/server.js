const bodyParser                    = require("body-parser");
const cookieParser                  = require("cookie-parser");
const helmet                        = require("helmet");

// test if this works on prod...

module.exports = (app) => {
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use((req, res, next) => {
    const allowedOrigin = process.env.NODE_ENV !== "production" ? req.headers.origin : "https://multipass.epitrade.io";
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", allowedOrigin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });
};
