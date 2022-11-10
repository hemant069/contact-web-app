require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
.create({body: 'Hi there i am Hemant Prajapati', from: '+18316536169', to: '+917758839221'})
.then(message => console.log(message.sid));