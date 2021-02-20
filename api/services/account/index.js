const AccountModel                       = require("../../models/account.js");
const {
  verifyJWT,
  signJWT
}                                         = require("../../helpers/jwt.js");

const {
  sendEmail
}                                         = require("../email/index.js");

function _throw(obj) { throw obj; }

async function decodeUser(jwt){
  try {
    if (!jwt || jwt == "logged-out") return false;
    const decoded = verifyJWT(jwt);
    return await AccountModel.findOne({ "email": decoded.email }).select("email claims")
  }
  catch (e){ throw { httpCode: 400, message: e }}
}

async function _getUsers(query){
  return await AccountModel.find(query);
}

/* returns a valid JWT token on completion */
async function createAccount(email, password, claims){
  try {

    // interact with db
    const newUser = await AccountModel.create({ email: email, password: password  });


    // send emails

    // 1. first to admin
    sendEmail({
      message: `<h1>User just signed up</h1><p>The user ${ email } just created a Multipass accounts</p>`,
      subject: `New multipass user`,
      recipients: ["usernotifications@epitrade.io"]
    })

    // 2. now to end-user


    return signJWT({ email: newUser.email, id: newUser._id });
  }
  catch (e){ throw { httpCode: 400, message: e }}
}

async function getAccount(email, property){
  /* PROPERTY ISNT SUPPORTED YET! */
  return await AccountModel.findOne({ email });
}
async function updateAccount(){

}
async function deleteAccount(id){

  const user = await AccountModel.findByIdAndDelete(id);

  sendEmail({
    message: `<h1>User just deleted account</h1><p>The user ${ user.email } just deleted a Multipass accounts</p>`,
    subject: `Multipass user deleted`,
    recipients: ["usernotifications@epitrade.io"]
  })


  return user;
}

async function login(email, password){
  try {
    console.log("LOGIN CALLED");
    const user = await AccountModel.findOne({ email }).select("_id email password");
    if (!user){ throw { httpCode: 404, message: "That user doesn't exist" } }
    return await user.isPasswordValid(password) ? { token: signJWT({ email: user.email, id: user._id }) } : _throw({ httpCode: 401, message: "Wrong Password" })
  }
  catch (e){ throw { httpCode: 400, message: e } }
}


module.exports = {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  decodeUser,
  login,
};
