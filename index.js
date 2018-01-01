require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);
const MessageBodyService = require('./lib/service.messageBody');

let messageBodyService = new MessageBodyService();

client.messages.create({
    body: messageBodyService.getMessage(),
    to: '+13026702550',
    from: '+18563693283'
})
    .then((message) => process.stdout.write(message.sid))
    .catch((reason) => console.log(reason));