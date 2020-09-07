const {setWorldConstructor} = require("cucumber");

class CustomWorld {
    constructor({parameters}) {
        this.variable = 0;
        console.log(`process: ${process.pid} - ${JSON.stringify(parameters)}`);
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}

setWorldConstructor(CustomWorld);