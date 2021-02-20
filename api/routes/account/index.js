const express                             = require("express");
const { errorHandler }                    = require("../../helpers/errorHandler.js");
const router                              = express.Router();

const {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  decodeUser,
  login
}                                         = require("../../services/account/index.js");

/* CREATE */
router.post("/", async (req, res, next) => {
  const property = req.query.property;
  const email = req.body.email;
  const password = req.body.password;
  try {
    console.log("CREATING ACCOUNT");
    const token = await createAccount(email, password, property);
    console.log(token);
    console.log("TOKEN ENDS");
    res.cookie("epitradeMultipass", token, {
      domain: process.env.NODE_ENV !== "production" ? ".localhost" : ".epitrade.io",
      maxAge: 1000 * 60 * 1200,
      sameSite: "none",
      secure: true,
      httpOnly: true
    });
    return res.send({ email });
  }
  catch (e){ return errorHandler(res, e); }
});

/* READ */
router.get("/", async (req, res, next) => {

  /* THIS SHOULD BE ADMIN ONLY ! */
  console.log("1")
  const email = req.query.email;
  try {
    return res.send({ exists: !! await getAccount(email) });
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/delete", async (req, res, next) => {
  console.log("DELETING")
  console.log(req.cookies);
  try {
    const user = await decodeUser(req.cookies.epitradeMultipass);
    await deleteAccount(user._id)
    res.clearCookie("epitradeMultipass");
    return res.send({
      deleted: true
    });
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/check-cookie", async (req, res, next) => {
  console.log("3: check-cookie")
  console.log(`request from ${req.headers.host}`)
  try {
    return res.send(await decodeUser(req.cookies.epitradeMultipass));
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/check-token", async (req, res, next) => {
  console.log("4: check-token")
  try {
    return res.send(await decodeUser(req.body.token));
  }
  catch (e){
    console.log(e);
    return errorHandler(res, e);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("5: login")
  const email = req.body.email;
  const password = req.body.password;
  try {
    const { token } = await login(email, password);
    console.log("TOKEN RECEIVED");
    console.log(token);
    res.cookie("epitradeMultipass", token, {
      domain: process.env.NODE_ENV !== "production" ? ".localhost" : ".epitrade.io",
      maxAge: 1000 * 60 * 1200,
      sameSite: "none",
      secure: true,
      httpOnly: true
    });
    return res.send({ email });
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/logout", async (req, res, next) => {
  res.clearCookie("epitradeMultipass");
  res.status(200).send({ "message": "cookie invalidated" });
});

module.exports = router;
