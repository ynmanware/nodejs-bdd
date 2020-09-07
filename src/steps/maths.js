const {Given, When, Then} = require('cucumber');
const assert = require('assert');

let answer = 0;

Given('I start with {int}', function (input) {
    answer = input;
    console.log('given');
});

When('I add {int}', function (input) {
    answer = answer + input;
    console.log('when')
});

Then('I end up with {int}', function (input) {
    assert.strictEqual(answer, input);
    console.log(`Success: ${answer}`)
});
