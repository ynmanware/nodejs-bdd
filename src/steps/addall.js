const {Given, When, Then} = require('cucumber');

Given('the following people exist:{}', async function (table) {
    this.addresses = table.hashes(); //store the address from the world
    //print out 4 different format to see differences
    console.log('rows', table.rows());
    console.log('hashes', table.hashes());
    console.log('raw', table.raw());
    console.log('rowsHash', table.rowsHash());
});

