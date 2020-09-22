const {Given, When, Then, AfterAll, After} = require('cucumber');
const assert = require('assert').strict
const restHelper = require('./../util/restHelper');

Given('A contact {}', function (request) {
    this.context['request'] = JSON.parse(request);
});

When('I send POST request to {}', async function (path) {
    this.context['response'] = await restHelper.postData(`${process.env.SERVICE_URL}${path}`, this.context['request']);
})

Then('I get response code {int}', async function (code) {
    assert.equal(this.context['response'].status, code);
});

When('I send PATCH request with a {} to {}', async function (phoneNumberPayload, path) {
    const response = await restHelper.patchData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`, JSON.parse(phoneNumberPayload));
    this.context['response'] = response;
})

Given('The contact with {int} exist', async function (id) {
    this.context['id'] = id;
})

When('I send GET request to {}', async function (path) {
    const response = await restHelper.getData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
    this.context['response'] = response;
})

Then(/^I receive (.*)$/, async function (expectedResponse) {
    assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
})

When('I send DELETE request to {}', async function (path) {
    const response = await restHelper.deleteData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
    this.context['response'] = response;
})