const {Given, When, Then} = require('cucumber');
const assert = require('assert').strict;

const {sleep} = require('./../util/util');
let answer = 0;

Given('I start with {int}', async function (input) {
    answer = input;
    console.log('given');
    console.log(`feature 1 - processId: ${process.pid}`);
    await sleep(1000);
});

When('I add {int}', function (input) {
    answer = answer * input;
    console.log('when')
});

Then('I end up with {int}', function (input) {
    assert.strictEqual(answer, input);
    console.log(`Success: ${answer}`);
});
