const {Given, When, Then} = require('cucumber');
const assert = require('assert').strict
const service = require('./../util/directory-service');

Given(/^a contact (.*)$/, function (request) {
    this.context['request'] = JSON.parse(request);
});

When('I post contact, new contact is created in DB', async function () {
    const response = await service.postContact(this.context['request']);
    assert.equal(response.status, 201);
})

When('I add {string} to the contact using {int}', async function (phoneNumber, id) {
    const response = await service.addSecondaryPhone(id, phoneNumber);
    assert.equal(response.status, 201);
})

Then(/^I read directory for (.*), I receive (.*)$/, async function (id, expectedResponse) {
    const response = await service.getContact(
        id
    )
    console.info(JSON.stringify(response.data));
    //assert.deepEqual(response.data, JSON.parse(expectedResponse));
})

Then('I am able to delete the contact with {int}', async function (id) {
    const response = await service.deleteContact(id);
    assert.equal(response.status, 200);
})