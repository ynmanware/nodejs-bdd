const {Given, When, Then, AfterAll, After, Before, defineSupportCode, setDefaultTimeout} = require('cucumber');
const assert = require('assert').strict

setDefaultTimeout(60 * 1000);

const lexHelper = require('./../util/lexHelper');
defineSupportCode(() => {
    Before((scenario) => {
        const scenarioName = scenario.pickle.name;
        console.log(`========================= Start Of Scenario Name: [${scenarioName}] =========================`);
    });

    When('Customer says {}', async function (utterance) {
        this.context['response'] = await lexHelper.postText(utterance, this.context['userId']);
    })

    Then('Bot replies {}', async function (expectedResponseStr) {
        comparePartialObject(this.context['response'], expectedResponseStr)
    });
});

const comparePartialObject = (actualResponse, expectedResponseStr) => {
    const expectedResponse = JSON.parse(expectedResponseStr);
    for (let prop in expectedResponse) {
        if (expectedResponse[prop] && !expectedResponse[prop].includes('At what time on')) {
            assert.equal(actualResponse[prop], expectedResponse[prop]);
        }
    }
}

