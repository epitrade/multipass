const axios                   = require("axios");

async function sendEmail(payload) {
  console.log("received email send request")
  console.log(payload)
  try {
    return await axios.post(`${ process.env.EMAIL_SERVER_ENDPOINT }/email`, {
      message: payload.message,
      subject: payload.subject,
      recipients: payload.recipients,
      password: process.env.EMAIL_SERVER_PASSWORD
    });
  }
  catch (e){ throw e }
};

module.exports = { sendEmail };
