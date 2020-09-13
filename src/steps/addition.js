const {Given, When, Then} = require("cucumber");
const assert = require("assert").strict

Given("a variable set to {int}", function (number) {
    this.setTo(number);
    console.info(`directory service url: ${process.env.DIRECTORY_SERVICE_URL}`);
    console.info(`feature 2 - processId: ${process.pid}`);
});

When("I increment the variable by {int}", function (number) {
    this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
    assert.equal(this.variable, number);
});