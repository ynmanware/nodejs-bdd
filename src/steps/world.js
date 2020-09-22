const {setWorldConstructor} = require("cucumber");

if (!process.env.SERVICE_URL) {
    require('dotenv-flow').config();
}

class CustomWorld {
    constructor({parameters}) {
        this.context = {};
        this.variable = 0;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}

setWorldConstructor(CustomWorld);