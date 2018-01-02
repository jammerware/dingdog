module.exports = class {
    constructor(accountSid, authToken, sendFromNumber) {
        this.accountSid = accountSid;
        this.authToken = authToken;
        this.sendFromNumber = sendFromNumber;
        this.twilioClient = require('twilio')(accountSid, authToken);
    }

    async send(to, message) {
        return new Promise((resolve, reject) => {
            this.twilioClient.messages.create({
                body: message,
                to: to,
                from: this.sendFromNumber
            })
                .then(message => resolve(message))
                .catch(reason => reject(reason));
        });
    }
}