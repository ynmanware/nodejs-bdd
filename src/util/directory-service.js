const restHelper = require('./restHelper');

const getContact = (id) => {
    return restHelper.getData(`${process.env.DIRECTORY_SERVICE_URL}/${id}`);
}

const postContact = (data) => {
    return restHelper.postData(`${process.env.DIRECTORY_SERVICE_URL}`, data);
}

const addSecondaryPhone = (id, phoneNumber) => {
    return restHelper.postData(`${process.env.DIRECTORY_SERVICE_URL}`, {'secondaryPhoneNumber': phoneNumber});
}

const deleteContact = (id) => {
    return restHelper.deleteData(`${process.env.DIRECTORY_SERVICE_URL}/${id}`);
}

module.exports = {
    getContact,
    postContact,
    addSecondaryPhone,
    deleteContact
}


