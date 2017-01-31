/**
 * Created by Jackist on 10/2/16.
 */
module.exports = function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var contact = new Schema({
        name : String,
        email : String,
        phone : String,
        message : String
    });
    return contact;
};