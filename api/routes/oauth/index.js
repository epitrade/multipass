const axios                               = require("axios");
const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const {
  signJWT,
  verifyJWT
}                                         = require("../../helpers/jwt.js");

const {
  getGithubToken
}                                         = require("../../services/github/index.js");

//const { OAuth2Client }                    = require('google-auth-library');
//const { clientId, clientSecret }          = require("../../keys/google.js");

router.get("/", async (req, res, next) => {
  res.send({ "message": "oauth endpoint" });
});

/* THIS WILL DECODE THE OAUTH TOKENS FOR GITHUB ETC */
router.post("/decode-token", async (req, res, next) => {
  try {
    console.log("decode")
    const cookie = req.cookies.multipass;
    let accounts = [];
    if (cookie){
      const decoded = verifyJWT(cookie);
      console.log(decoded)
      accounts = decoded.linkedAccounts ? decoded.linkedAccounts : [];
    }
    return res.send({ accounts });
  }
  catch (e){ return errorHandler(res, e); }
});


router.post("/connect/test", async (req, res, next) => {
  console.log("TEST ENDPOINT");
  res.cookie("multipass", "1234", {
    maxAge: 1000 * 60 * 1200,
    sameSite: "none",
    secure: true,
    httpOnly: true
  });
  res.send("test");

});

router.post("/connect/youtube", async (req, res) => {

  console.log("attempting youtube oauth2");




  res.send({
    success: true
  })
    /*
    console.log("HELLO222");
    const client = new OAuth2Client(
      clientId,
      clientSecret,
      redirectURL
    );
    console.log(client);

      // Generate the url that will be used for the consent dialog.
    const url = client.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/youtube',
    });

    /*

    const r = await oAuth2Client.getToken(code);
  // Make sure to set the credentials on the OAuth2 client.
  oAuth2Client.setCredentials(r.tokens);

    res.send({ url });
  */

});

router.post("/connect/github", async (req, res, next) => {
  const siteName = req.params.siteName;
  const redirectUrl = req.body.redirectUrl;
  const code = req.body.code;
  try {
    console.log("YOU ARE HERE!");
    const { data } = await getGithubToken(code);
    console.log(data)
    if (data.indexOf("access_token=") > -1){
      console.log("access token")
      const token = data.split("access_token=")[1].split("&")[0];
      const signed = await signJWT({
        linkedAccounts: [
          { name: "github", token }
        ]
      });
      console.log("***************");
      console.log("verifying");
      console.log(verifyJWT(signed));
      console.log("****************");

      res.cookie("multipass", signed, {
        maxAge: 1000 * 60 * 1200,
        sameSite: "none",
        secure: true,
        httpOnly: true
      });

      console.log("sent");
      return res.send({ token });
    }
    else {
      throw { httpCode: 400, message: "Bad Request" }
    }
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
