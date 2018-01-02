require('dotenv').config();
const MessageBodyService = require('./lib/service.messageBody');
const TwilioService = require('./lib/service.twilio');

let messageBodyService = new MessageBodyService();
let twilioService = new TwilioService(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN, '+18563693283');

(async () => {
    let message = await twilioService.send('+13026702550', "Dingdog is online!");
    process.stdout.write("Message sid");
    process.stdout.write(message.sid);
})();

//while (true) {
    // todo: literally anything
//}