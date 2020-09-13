const {setWorldConstructor} = require("cucumber");

if (!process.env.DIRECTORY_SERVICE_URL) {
    require('dotenv-flow').config();
}

class CustomWorld {
    constructor({parameters}) {
        this.context = {};
        this.variable = 0;
        console.log(`process id: ${process.pid} and parameter: ${JSON.stringify(parameters)}`);
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}

setWorldConstructor(CustomWorld);