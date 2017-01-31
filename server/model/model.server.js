/**
 * Created by Jackist on 10/2/16.
 */
module.exports = function () {
    var connectionString = 'mongodb://127.0.0.1:27017/hack1';
    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    var mongoose = require('mongoose');
    mongoose.connect(connectionString);

    var ContactSchema = require("./schema.server.js")();
    var Contact = mongoose.model("Contact", ContactSchema);

    var api = {
        createContact : createContact
    };

    return api;

    function createContact(contact) {
        return Contact.create(contact);
    }
};