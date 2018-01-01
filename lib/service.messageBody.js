module.exports = class {
    constructor() {
        this.bodies = [
            "Daaaaaaaaaaaaaad!!",
            "DAAAAAAAAAD!!!!!",
            "Hey Dad. I gotta go :(",
            "I have a Thing to do!",
            "My master made me this button so that I may talk. SQUIRREL????",
            "Shit happens. Right now, hopefully?"
        ];
    }

    getMessage() {
        return this.bodies[Math.floor(Math.random() * this.bodies.length)];
    }
}