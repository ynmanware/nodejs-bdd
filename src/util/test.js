const faker = require('faker');
const _ = require('lodash');


_.times(100, (n) => {

    const c = {}
    c.id = n;
    c.name = faker.name.findName();
    c.email = faker.internet.email();
    c.phoneNumber = faker.phone.phoneNumber();
    console.info(JSON.stringify(c));
})

