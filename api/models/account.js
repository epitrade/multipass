const mongoose                            = require("mongoose");
const bcrypt                              = require("bcrypt");
const Schema                              = mongoose.Schema;

const account = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  claims: { type: Array, default: [] },
  logins: { type: Array, default: [] },
	createdAt: {type: Date, default: Date.now }
});

account.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

account.methods.isPasswordValid = async function(password){
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("account", account);
